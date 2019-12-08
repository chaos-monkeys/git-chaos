const core = require('@actions/core');
const Octokit = require('@octokit/rest');
const { createHistory } = require('./helpers/createHistory');

// these envs come from the github action
const { GITHUB_TOKEN } = process.env;
const { GITHUB_SHA } = process.env;
const { GIT_OWNER } = process.env;
const { GIT_REPO } = process.env;


const getBranchName = async ({ octokit }) => {
  const { data: pullRequests } = await octokit.pulls.list({
    owner: GIT_OWNER,
    repo: GIT_REPO,
    state: 'open',
  });

  const branchName = pullRequests.forEach((pullRequest) => (GITHUB_SHA === pullRequest.merge_commit_sha ? pullRequest.head.ref : ''));

  return branchName || core.setFailed('Unable to find branch');
};

const getPullRequestNumber = async ({ octokit }) => {
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


const run = async () => {
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });

  const history = await createHistory({
    octokit,
    owner: GIT_OWNER,
    repo: GIT_REPO,
    envBranch: await getBranchName({ octokit }),
  });

  core.debug(JSON.stringify(history));


  octokit.issues
    .createComment({
      owner: GIT_OWNER,
      repo: GIT_REPO,
      issue_number: await getPullRequestNumber({ octokit }),
      body: JSON.stringify(history),
    })
    .catch((err) => {
      core.debug(err);
    });
};

run();
