require('dotenv').config();

const util = require('util');
const fs = require('fs');
const { branch: envBranch } = require('./helpers/config');
const { formatCommits } = require('./helpers/parsers');
const { octokit, CONFIG, getCommits } = require('./helpers/github');


const run = async () => {
  // get branch
  // get detailed commits
  // cleanup the detailed commits
  // generate file

  const { data: branch } = await octokit.repos.getBranch({
    ...CONFIG,
    branch: envBranch,
  });

  const commits = await getCommits(branch.name);

  const formattedCommits = commits.map(formatCommits);

  fs.writeFileSync('./temp/formattedCommits.js', util.inspect(formattedCommits, { showHidden: false, depth: null }), 'utf-8');
};

run();
