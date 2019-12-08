const core = require('@actions/core');

const { formatCommits } = require('./helpers/parsers');
const { getCommits } = require('./helpers/github');

const createHistory = async ({
  octokit,
  owner,
  repo,
  envBranch,
}) => {
  // get branch
  const { data: branch } = await octokit.repos.getBranch({
    owner,
    repo,
    branch: envBranch,
  }).catch((e) => {
    core.debug('getBranch');
    core.debug(owner);
    core.debug(repo);
    core.debug(envBranch);
    core.debug(e);
  });

  core.debug(envBranch);
  core.debug(branch);

  // get detailed commits
  const commits = await getCommits({
    octokit,
    owner,
    repo,
    sha: branch.name,
  }).catch((e) => {
    core.debug('getBranch');
    core.debug(owner);
    core.debug(repo);
    core.debug(branch);
    core.debug(e);
  });

  // clean it up!
  const formattedCommits = commits.map(formatCommits);

  return formattedCommits;
};

module.exports = {
  createHistory,
};
