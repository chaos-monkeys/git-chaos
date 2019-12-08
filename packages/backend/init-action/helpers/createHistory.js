const core = require('@actions/core');

const { formatCommits } = require('./parsers');
const { getCommits } = require('./github');

const createHistory = async ({
  octokit,
  owner,
  repo,
  branch: envBranch,
}) => {
  // get branch
  const { data: branch } = await octokit.repos.getBranch({
    owner,
    repo,
    branch: envBranch,
  }).catch((e) => {
    core.debug('getBranch');
    core.debug(JSON.stringify(owner));
    core.debug(JSON.stringify(repo));
    core.debug(JSON.stringify(envBranch));
    core.debug(JSON.stringify(e));
  });

  core.debug(branch);
  core.debug(branch);

  // get detailed commits
  const commits = await getCommits({
    octokit,
    owner,
    repo,
    sha: branch.name,
  }).catch((e) => {
    core.debug('getCommits');
    core.debug(JSON.stringify(owner));
    core.debug(JSON.stringify(repo));
    core.debug(JSON.stringify(branch));
    core.debug(JSON.stringify(e));
  });

  // clean it up!
  const formattedCommits = commits.map(formatCommits);

  return formattedCommits;
};

module.exports = {
  createHistory,
};
