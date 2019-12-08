const core = require("@actions/core");
const Octokit = require("@octokit/rest");

const { GITHUB_TOKEN, GITHUB_SHA, GIT_OWNER, GIT_REPO } = process.env

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

const checkRequiredEnv = () => {
  if (GITHUB_TOKEN === null && GITHUB_TOKEN === undefined) {
    core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
    core.setFailed(error.message);
  }
};

async function getPullRequestNumber() {
  let pullRequestNumber = 0;

  try {
    const openPullRequest = await octokit.pulls.list({
      owner: GIT_OWNER,
      repo: GIT_REPO,
      state: 'open'
    })

    openPullRequest['data'].forEach(async (pullRequest) => {
      const mergeCommitSHA = pullRequest.merge_commit_sha;
      core.debug(`GITHUB_SHA, ${GITHUB_SHA}`)
      core.debug(`mergeCommitSHA, ${mergeCommitSHA}`)
      if (GITHUB_SHA === mergeCommitSHA) {
        pullRequestNumber = await parseInt(pullRequest.number);
      }
    });
  } catch (error) {
    core.debug(error)
    console.log(error)
  }

  await core.exportVariable('PR_NUMBER', pullRequestNumber);
  return pullRequestNumber
}

(async () => {
  checkRequiredEnv();
  const commentMessage = core.getInput("message");
  const pullRequestNumber = await getPullRequestNumber();
  core.debug(`pullRequestNumber ${pullRequestNumber}`)
  octokit.issues
    .createComment({
      owner: GIT_OWNER,
      repo: GIT_REPO,
      issue_number: pullRequestNumber,
      body: commentMessage
    })
    .catch(err => {
      console.log(err);
    });
})();
