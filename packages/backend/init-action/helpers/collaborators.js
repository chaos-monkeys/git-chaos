const core = require("@actions/core");

const getCollaborators = async ({ octokit, owner, repo }) => {
  const allCollaborators = {};
  const projectCollaborators = await octokit
    .paginate(`GET /repos/:owner/:repo/collaborators`, { owner, repo })
    .catch(error => {
      core.debug("getCollaborators");
      core.setFailed(error.message);
    });

  for (const collaborator of projectCollaborators) {
    const collaboratorInfo = await octokit
      .request(`GET /users/${collaborator.login}`)
      .then(c => c.data)
      .catch(error => {
        core.debug("collaboratorInfo");
        core.setFailed(error.message);
      });

    allCollaborators[collaboratorInfo.id] = {
      username: collaboratorInfo.login,
      name: collaboratorInfo.name,
      avatar_url: collaboratorInfo.avatar_url,
      html_url: collaboratorInfo.html_url,
      company: collaboratorInfo.company,
      blog: collaboratorInfo.blog,
      location: collaboratorInfo.location
    };
  }

  return allCollaborators;
};

module.exports = {
  getCollaborators
};
