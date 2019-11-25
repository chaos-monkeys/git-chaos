const Octokit = require('@octokit/rest');
const querystring = require('querystring');

const { owner, repo, token } = require('./config');

const CONFIG = {
  owner,
  repo,
};

const octokit = new Octokit({
  ...CONFIG,
  auth: token,
});

const getCommits = async (sha) => {
  const qs = querystring.stringify({ sha });

  // by using a query string that's the name of a branch - we can get all the commits
  // BUT the commits are missing some data, so we will need to re-get them one-by-one
  const getAllCommits = await octokit.paginate(
    `GET /repos/:owner/:repo/commits?${qs}`,
    { ...CONFIG },
  );

  return Promise.all(
    // make the detailed requests one by one
    getAllCommits.map((commit) => octokit
      .request(`GET /repos/:owner/:repo/commits/${commit.sha}`, { ...CONFIG })
      .then((c) => c.data)),
  );
};

module.exports = {
  octokit,
  CONFIG,
  getCommits,
};
