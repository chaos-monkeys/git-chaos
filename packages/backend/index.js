const { parseCommit, getShaFromBranch } = require('./helpers/parsers');
const {
  getCommits, getPull, getPullFiles, getAllBranches,
} = require('./helpers/github');

const get = async () => {
  const allBranches = await getAllBranches();

  const branch = allBranches.find((o) => o.name === 'feat/actions-and-workflows');
  const sha = getShaFromBranch(branch);

  const commits = await getCommits(sha);
  console.log(commits.length);
};

get();
