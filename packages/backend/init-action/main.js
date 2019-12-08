const core = require('@actions/core');
const Octokit = require('@octokit/rest');
const { createHistory } = require('./createHistory');

// these envs come from the github action
const { GITHUB_TOKEN } = process.env;
const { GITHUB_SHA } = process.env;
const { GIT_OWNER = 'chaos-monkeys' } = process.env;
const { GIT_REPO = 'git-chaos' } = process.env;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});


const hasToken = () => {
  if (GITHUB_TOKEN === null || GITHUB_TOKEN === undefined) {
    core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
  }
};

const getPullRequestNumber = async () => {
  let pullRequestNumber = 0;

  try {
    const openPullRequest = await octokit.pulls.list({
      owner: GIT_OWNER,
      repo: GIT_REPO,
      state: 'open',
    });

    openPullRequest.data.forEach(async (pullRequest) => {
      const mergeCommitSHA = pullRequest.merge_commit_sha;

      core.debug(`GITHUB_SHA, ${GITHUB_SHA}`);
      core.debug(`mergeCommitSHA, ${mergeCommitSHA}`);

      core.debug(
        `mergeCommitSHA : ${mergeCommitSHA}`,
      );


      if (GITHUB_SHA === mergeCommitSHA) {
        pullRequestNumber = parseInt(pullRequest.number, 10);
      }
    });
  } catch (error) {
    core.debug(error);
    core.debug(error);
  }

  await core.exportVariable('PR_NUMBER', pullRequestNumber);
  return pullRequestNumber;
};


const findBranch = async () => {
  const { data: openPullRequest } = await octokit.pulls.list({
    owner: GIT_OWNER,
    repo: GIT_REPO,
    state: 'open',
  });


  const currentBranch = (() => {
    for (let i = 0; i < openPullRequest.length; i += 1) {
      if (GITHUB_SHA === openPullRequest[i].merge_commit_sha) {
        core.debug(`head.ref ${openPullRequest[i].head.ref}`);
        return openPullRequest[i].head.ref;
      }
    }
  })();

  core.debug(`currentBranch ${currentBranch}`);
  return currentBranch;
};


const run = async () => {
  hasToken();

  const envBranch = await findBranch();
  console.log(envBranch);

  const history = await createHistory({
    octokit,
    owner: GIT_OWNER,
    repo: GIT_REPO,
    envBranch,
  });


  // const commentMessage = core.getInput('message');
  const pullRequestNumber = await getPullRequestNumber();
  core.debug(`pullRequestNumber ${pullRequestNumber}`);

  octokit.issues
    .createComment({
      owner: GIT_OWNER,
      repo: GIT_REPO,
      issue_number: pullRequestNumber,
      body: history[0],
    })
    .catch((err) => {
      core.debug(err);
    });
};

run();
