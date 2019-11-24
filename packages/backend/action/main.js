const core = require("@actions/core");
const Octokit = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

core.debug(`List all env variables ${process.env}`);

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
  octokit.pulls
    .createComment({
      owner: "chaos-monkeys",
      repo: "git-chaos",
      pull_number: 10,
      body: commentMessage,
      commit_id: process.env.GITHUB_SHA,
      path: process.env.GITHUB_EVENT_PATH
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
