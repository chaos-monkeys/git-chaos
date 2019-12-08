const core = require('@actions/core');
const Octokit = require('@octokit/rest');

// these envs come from the github action
const { GITHUB_TOKEN } = process.env;
const { GITHUB_SHA } = process.env;
const { GIT_OWNER } = process.env;
const { GIT_REPO } = process.env;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

const hasToken = () => {
  if (GITHUB_TOKEN === null || GITHUB_TOKEN === undefined) {
    core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
    core.setFailed(error.message);
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

      if (GITHUB_SHA === mergeCommitSHA) {
        pullRequestNumber = await parseInt(pullRequest.number, 10);
      }
    });
  } catch (error) {
    core.debug(error);
    console.log(error);
  }

  await core.exportVariable('PR_NUMBER', pullRequestNumber);
  return pullRequestNumber;
};


const run = async () => {
  hasToken();

  const commentMessage = core.getInput('message');

  const pullRequestNumber = await getPullRequestNumber();

  core.debug(`pullRequestNumber ${pullRequestNumber}`);


  const history = createHistory({
    octokit,
    owner: GIT_OWNER,
    repo: GIT_REPO,
  });


  octokit.issues
    .createComment({
      owner: GIT_OWNER,
      repo: GIT_REPO,
      issue_number: pullRequestNumber,
      body: commentMessage,
    })
    .catch((err) => {
      console.log(err);
    });
};

run();
