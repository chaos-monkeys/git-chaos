const core = require("@actions/core");
const Octokit = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

// const checkRequiredEnv = () => {
//   if (GITHUB_TOKEN === null && GITHUB_TOKEN === undefined) {
//     core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
//     core.setFailed(error.message);
//   }
// };

const run = () => {
  const commentMessage = core.getInput("message");
  octokit.issues
    .createComment({
      owner: "chaos-monkeys",
      repo: "git-chaos",
      issue_number: 10,
      body: "Hello from Citizen M"
    })
    .catch(err => {
      console.log(err);
    });
};

// async function run() {
//   checkRequiredEnv();
//   try {
//     const commentMessage = core.getInput("message");
//     octokit.pulls.createComment({
//       owner: "chaos-monkeys",
//       repo: process.env.GITHUB_REPOSITORY,
//       pull_number: 10,
//       body: commentMessage,
//       commit_id: process.env.GITHUB_SHA,
//       path: process.env.GITHUB_EVENT_PATH
//     });
//     core.debug(`Action outputs message ${commentMessage}`);
//   } catch (error) {
//     core.setFailed(error.message);
//   }
// }

run();
