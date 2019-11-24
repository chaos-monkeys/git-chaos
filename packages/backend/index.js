const { getShaFromBranch, formatCommits } = require('./helpers/parsers');
const {
  getCommits,
  getAllBranches,
  getSingleCommit,
} = require('./helpers/github');

const ENV_BRANCH = 'feat/actions-and-workflows';

const run = async () => {
  const allBranches = await getAllBranches();

  const branch = allBranches.find((o) => o.name === ENV_BRANCH);
  const sha = getShaFromBranch(branch);

  const commits = await getCommits(sha);

  const fullCommits = await Promise.all(commits.map((o) => getSingleCommit(o.sha)));


  const util = require('util');
  const fs = require('fs');

  fs.writeFileSync(
    './formatted.js',
    util.inspect(fullCommits.map(formatCommits), { showHidden: false, depth: null }),
    'utf-8',
  );
};

run();
