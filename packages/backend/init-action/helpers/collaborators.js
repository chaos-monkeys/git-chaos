const core = require("@actions/core");

const getCollaborators = async ({ octokit, owner, repo }) => {
  const projectCollaborators = await octokit
    .paginate(`GET /repos/:owner/:repo/collaborators`, { owner, repo })
    .catch(error => {
      core.debug("getCollaborators");
      core.setFailed(error.message);
    });

  core.debug("------");
  core.debug(projectCollaborators);

  return projectCollaborators.reduce((allCollaborators, collaborator) => {
    allCollaborators[collaborator.id] = {
      username: collaborator.login,
      avatar_url: collaborator.avatar_url,
      html_url: collaborator.html_url
    };
    return allCollaborators;
  }, {});
};

module.exports = {
  getCollaborators
};
