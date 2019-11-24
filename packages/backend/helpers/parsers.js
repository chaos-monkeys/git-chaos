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


const parseFiles = (files) => files.map(formatFile);
const parseStats = (stats) => formatStats(stats);

const parseCommit = (commit) => ({
  files: parseFiles(commit.files),
  stats: parseStats(commit.stats),
});

module.exports = {
  parseCommit,
};
