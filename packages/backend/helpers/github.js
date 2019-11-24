const { axios } = require('./axios');

// TODO: make these env variables (command line?)
const ENV_ORG = 'chaos-monkeys';
const ENV_REPO = 'git-chaos';

const getAllBranches = () => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/branches`).then((o) => o.data);

// make it paginate!
const getCommits = (sha) => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/commits?per_page=100&sha=${sha}`).then((o) => o.data);

const getPull = (id) => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/pulls/${id}`).then((o) => o.data);

const getPullFiles = (id) => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/pulls/${id}/commits`).then((o) => o.data);

module.exports = {
  getCommits,
  getAllBranches,
  getPull,
  getPullFiles,
};
