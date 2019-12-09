const core = require('@actions/core');

const { formatCommits } = require('./parsers');
const { getCommits } = require('./commits');


const getCodeHistory = async ({
  octokit,
  owner,
  repo,
  branch: envBranch,
}) => {
  // get branch
  const { data: branch } = await octokit.repos
    .getBranch({
      owner,
      repo,
      branch: envBranch,
    }).catch((error) => {
      core.debug('getBranch');
      core.setFailed(error.message);
    });

  // get detailed commits
  const commits = await getCommits({
    octokit,
    owner,
    repo,
    sha: branch.name,
  }).catch((error) => {
    core.debug('getCommits');
    core.setFailed(error.message);
  });

  // return the cleaned up commit data!
  return commits.map(formatCommits);
};

module.exports = {
  getCodeHistory,
};
