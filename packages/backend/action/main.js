const core = require("@actions/core");
const Octokit = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

const checkRequiredEnv = () => {
  if (GITHUB_TOKEN === null && GITHUB_TOKEN === undefined) {
    core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
    core.setFailed(error.message);
  }
};

const run = () => {
  checkRequiredEnv();
  const commentMessage = core.getInput("message");
  octokit.issues
    .createComment({
      owner: "chaos-monkeys",
      repo: "git-chaos",
      issue_number: 10,
      body: commentMessage
    })
    .catch(err => {
      console.log(err);
    });
};

run();
