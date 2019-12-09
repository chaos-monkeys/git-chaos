const core = require('@actions/core');

const getPullRequestNumber = async ({
  octokit, owner, repo, sha,
}) => {
  let pullRequestNumber = 0;

  const openPullRequest = await octokit.pulls.list({
    owner,
    repo,
    state: 'open',
  }).catch((error) => {
    core.debug('openPullRequest');
    core.setFailed(error.message);
  });

  openPullRequest.data.forEach(async (pullRequest) => {
    const mergeCommitSHA = pullRequest.merge_commit_sha;

    if (sha === mergeCommitSHA) {
      pullRequestNumber = parseInt(pullRequest.number, 10);
    }
  });

  return pullRequestNumber;
};

const createComment = async ({
  octokit, owner, repo, sha, message,
}) => octokit.issues.createComment({
  owner,
  repo,
  issue_number: await getPullRequestNumber({
    octokit,
    owner,
    repo,
    sha,
  }),
  body: message,
}).catch((err) => {
  core.debug(err);
});

module.exports = {
  createComment,
};
