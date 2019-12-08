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
    branch: envBranch,
  });

  // get detailed commits
  const commits = await getCommits({ octokit, sha: branch.name });

  // clean it up!
  const formattedCommits = commits.map(formatCommits);

  return formattedCommits;
};

module.exports = {
  createHistory,
};
