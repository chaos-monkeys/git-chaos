const getShaFromBranch = (branch) => branch.commit.sha;

const parseFiles = (commit) => commit.files.map((file) => ({
  filename: file.filename,
  status: file.status,
  additions: file.additions,
  deletions: file.deletions,
  changes: file.changes,
  raw_url: file.raw_url,
}));

const parseStats = (commit) => commit.stats;

const parseAuthor = (commit) => commit.author;

const parseCommitter = (commit) => commit.committer;

const formatCommits = (commit) => ({
  sha: commit.sha,
  author: parseAuthor(commit),
  committer: parseCommitter(commit),
  files: parseFiles(commit),
  stats: parseStats(commit),
  message: commit.commit.message,
  url: commit.commit.url,
});

module.exports = {
  formatCommits,
  getShaFromBranch,
};
