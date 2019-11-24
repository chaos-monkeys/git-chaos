const core = require("@actions/core");
const Octokit = require("@octokit/rest");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

core.debug(`List all env variables ${process.env}`);

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

const checkRequiredEnv = () => {
  if (GITHUB_TOKEN === null && GITHUB_TOKEN === undefined) {
    core.warning(`Variable check failed: GITHUB_TOKEN: ${GITHUB_TOKEN}`);
    core.setFailed(error.message);
  }
};

async function run() {
  checkRequiredEnv();
  try {
    const commentMessage = core.getInput("msg");
    core.debug(`Actino outputs message ${commentMessage}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
