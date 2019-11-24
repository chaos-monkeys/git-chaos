const { axios } = require('./axios');

// TODO: make these env variables (command line?)
const ENV_ORG = 'chaos-monkeys';
const ENV_REPO = 'git-chaos';

const getCommits = (sha) => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/commits/${sha}`);

module.exports = {
  getCommits,
};
