const { axios } = require('./axios');

// TODO: make these env variables (command line?)
const ENV_ORG = 'chaos-monkeys';
const ENV_REPO = 'git-chaos';

const getAllBranches = () => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/branches`).then((o) => o.data);

// make it paginate!
const getCommits = (sha) => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/commits?per_page=100&sha=${sha}`).then((o) => o.data);

const getSingleCommit = (sha) => axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/commits/${sha}`).then((o) => o.data);


module.exports = {
  getCommits,
  getSingleCommit,
  getAllBranches,
};
