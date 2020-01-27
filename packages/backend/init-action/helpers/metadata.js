const core = require("@actions/core");

const projectMetadata = await octokit
  .paginate(`GET /repos/:owner/:repo/`, { owner, repo })
  .catch(error => {
    core.debug("getAllCommits");
    core.setFailed(error.message);
  });

module.exports = {
  projectMetadata
};
