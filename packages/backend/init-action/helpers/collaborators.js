const core = require("@actions/core");

const getCollaborators = async ({ octokit, owner, repo }) => {
  const collaboratorPromise = [];
  const projectCollaborators = await octokit
    .paginate(`GET /repos/:owner/:repo/collaborators`, { owner, repo })
    .catch(error => {
      core.debug("getCollaborators");
      core.setFailed(error.message);
    });

  projectCollaborators.map(collaborator =>
    octokit
      .request(`GET /users/${collaborator}`)
      .then(c => collaboratorPromise.push(c.data))
      .catch(error => {
        core.debug("collaboratorInformation");
        core.setFailed(error.message);
      })
  );

  (await Promise.all(collaboratorPromise)).reduce(
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
};

module.exports = {
  getCollaborators
};
