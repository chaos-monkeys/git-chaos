const core = require("@actions/core");
const Octokit = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GIT_OWNER = process.env.GIT_OWNER;
const GIT_REPO = process.env.GIT_REPO;
const GITHUB_SHA = process.env.GITHUB_SHA;

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

const checkRequiredEnv = () => {
  if (GITHUB_TOKEN === null && GITHUB_TOKEN === undefined) {
    core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
    core.setFailed(error.message);
  }
};

const getPullRequestNumber = () => {
  // const pullRequestNumber = 0;
  octokit.pulls.list({
    owner: GIT_OWNER,
    repo: GIT_OWNER,
    state: 'open'
  }).then(openPullRequest => {
    openPullRequest.forEach(pullRequest => {
      const pullRequestSHA = pullRequest.head.sha;
      if (GITHUB_SHA === pullRequestSHA) {
        pullRequestNumber = parseInt(pullRequest.number);
      }
    });
    console.log('pullRequestNumber', pullRequestNumber)
    // Exports the PR variable for future workflows
    core.exportVariable('PR_NUMBER', pullRequestNumber);
    return pullRequestNumber;
  }).catch(err => {
    console.log(err)
  })
}

(async () => {
  checkRequiredEnv();
  const commentMessage = core.getInput("message");
  const pullRequestNumber = await getPullRequestNumber();
  octokit.issues
    .createComment({
      owner: GIT_OWNER,
      repo: GIT_OWNER,
      issue_number: pullRequestNumber,
      body: commentMessage
    })
    .catch(err => {
      console.log(err);
    });
})();
