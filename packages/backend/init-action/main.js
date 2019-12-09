const core = require('@actions/core');
const Octokit = require('@octokit/rest');
const { getCodeHistory } = require('./helpers/history');
const { createComment } = require('./helpers/comment');

// these envs come from the github action
const {
  GITHUB_TOKEN,
  GITHUB_SHA,
  GITHUB_REPOSITORY,
  GITHUB_REF,
} = process.env;

const [GIT_OWNER, GIT_REPO] = GITHUB_REPOSITORY.split('/');


const run = async () => {
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  });

  const history = await getCodeHistory({
    octokit,
    owner: GIT_OWNER,
    repo: GIT_REPO,
    branch: GITHUB_REF,
  });

  // TODO:add S3 upload here

  core.debug(JSON.stringify(history));

  return createComment({
    octokit,
    owner: GIT_OWNER,
    repo: GIT_REPO,
    sha: GITHUB_SHA,
    // TODO: update with something less 'temporary'
    message: 'Hey Rob!',
  });
};

run();
