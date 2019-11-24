const formatFile = (file) => ({
  filename: file.filename,
  status: file.status,
  additions: file.additions,
  deletions: file.deletions,
  changes: file.changes,
  raw_url: file.raw_url,
});

const formatStats = (stats) => ({
  total: stats.total,
  additions: stats.additions,
  deletions: stats.deletions,
});


// const parseFiles = (files) => files.map(formatFile);
const parseFiles = (files) => {
  const a = Array.isArray(files) ? files : [files];
  return a.map(formatFile);
};

const parseStats = (stats) => formatStats(stats);

const parseCommit = (commit) => ({
  files: parseFiles(commit.files),
  stats: parseStats(commit.stats),
});

const getShaFromBranch = (branch) => branch.commit.sha;


const getBranches = (pr) => ({
  head: pr.head,
  base: pr.base,
});

module.exports = {
  parseCommit,
  getShaFromBranch,
};
