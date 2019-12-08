require('dotenv').config();

const { branch: envBranch } = require('./helpers/config');
const { formatCommits } = require('./helpers/parsers');
const { octokit, CONFIG, getCommits } = require('./helpers/github');


const run = async () => {
  // get branch
  const { data: branch } = await octokit.repos.getBranch({
    ...CONFIG,
    branch: envBranch,
  });

  // get detailed commits
  const commits = await getCommits(branch.name);

  // clean it up!
  const formattedCommits = commits.map(formatCommits);

  return formattedCommits;
};

run();

module.exports = {
  run,
};
