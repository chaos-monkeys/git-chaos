const core = require('@actions/core');
const Octokit = require('@octokit/rest');
const { createHistory } = require('./createHistory');

// these envs come from the github action
const { GITHUB_TOKEN } = process.env;
const { GITHUB_SHA } = process.env;
const { GIT_OWNER } = process.env;
const { GIT_REPO } = process.env;

// const GIT_OWNER = 'chaos-monkeys';
// const GIT_REPO = 'git-chaos';
// const BRANCH = 'feat/actions-and-workflows';
// GITHUB_SHA;
// const GITHUB_TOKEN = '6578ce586649b917a3a3b7000a5f324df979d216';

const CONFIG = {
  owner: GIT_OWNER,
  repo: GIT_REPO,
};

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
      ...CONFIG,
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
  const openPullRequest = await octokit.pulls.list({
    ...CONFIG,
    state: 'open',
  });


  const currentBranch = (() => {
    for (let i = 0; i < openPullRequest.length; i += 1) {
      core.debug(
        `condition: ${GITHUB_SHA === openPullRequest[i].pullRequest.merge_commit_sha}`,
      );

      core.debug(GITHUB_SHA);
      core.debug(openPullRequest[i].pullRequest.merge_commit_sha);
      if (GITHUB_SHA === openPullRequest[i].pullRequest.merge_commit_sha) {
        core.debug(`inside: ${openPullRequest[i].pullRequest}`);
        return openPullRequest[i].pullRequest.head.ref;
      }
    }


    // openPullRequest.forEach((pullRequest) => {
    //   if (GITHUB_SHA === pullRequest.merge_commit_sha) {
    //     s = pullRequest.head.ref;
    //   }
    // });
    // return s;
  })();

  return currentBranch;
};


const run = async () => {
  hasToken();

  // const commentMessage = core.getInput('message');

  const history = await createHistory({
    octokit,
    ...CONFIG,
    envBranch: findBranch(),
  });


  const pullRequestNumber = await getPullRequestNumber();
  core.debug(`pullRequestNumber ${pullRequestNumber}`);

  octokit.issues
    .createComment({
      ...CONFIG,
      issue_number: pullRequestNumber,
      body: history[0],
    })
    .catch((err) => {
      core.debug(err);
    });
};

run();
