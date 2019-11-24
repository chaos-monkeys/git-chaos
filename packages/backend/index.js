const { parseCommit } = require('./helpers/parsers');
const { getCommits } = require('./helpers/github');


(async () => {
  // get pr
  // get base branch
  // get commits on both
  // merge
  // clean


  const commits = await getCommits('replace-elm-with-gatsby');
  const commit = parseCommit(commits.data);
  console.log(commit);
})();
