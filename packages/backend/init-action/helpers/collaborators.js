const core = require("@actions/core");

const getCollaborators = async ({ octokit, owner, repo }) => {
  const projectCollaborators = await octokit
    .paginate(`GET /repos/:owner/:repo/collaborators`, { owner, repo })
    .catch(error => {
      core.debug("getCollaborators");
      core.setFailed(error.message);
    });

  const collaboratorInformation = projectCollaborators.map(collaborator =>
    octokit
      .request(`GET /users/${collaborator}`)
      .then(c => c.data)
      .catch(error => {
        core.debug("collaboratorInformation");
        core.setFailed(error.message);
      })
  );

  (await Promise.all(collaboratorInformation)).reduce(
    (allCollaborators, collaborator) => {
      allCollaborators[collaborator.id] = {
        username: collaborator.login,
        name: collaborator.name,
        avatar_url: collaborator.avatar_url,
        html_url: collaborator.html_url,
        company: collaborator.company,
        blog: collaborator.blog,
        location: collaborator.location
      };
      return allCollaborators;
    },
    {}
  );

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
