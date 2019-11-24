const { axios } = require('./helpers/axios');

const { parseCommit } = require('./helpers/parsers');

// TODO: make these env variables (command line?)
const ENV_ORG = 'chaos-monkeys';
const ENV_REPO = 'git-chaos';

(async () => {
  const commits = await axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/commits/replace-elm-with-gatsby`);
  const commit = parseCommit(commits.data);
  console.log(commit);

  // const a = await axios.get(`/repos/${ENV_ORG}/${ENV_REPO}/commits/${shas[0]}`);

  // console.log(shas);


  // ➜  ~ curl https://api.github.com/repos/chaos-monkeys/git-chaos/commits/44654bf5260c714550ac8732e48665d0580fd272
  // // client can be created without a token (for now)
  // const octokit = new Octokit({
  //   auth: 'token d0b09bb0e5bf0c126bfea597122699bff4eb258e',
  // });

  // // const pr = await octokit.pulls.get({
  // //   owner: ENV_ORG,
  // //   repo: ENV_REPO,
  // //   pull_number: ENV_PULL_NUMBER,
  // // });

  // // const ref = await octokit.git.getRef({
  // //   owner: ENV_ORG,
  // //   repo: ENV_REPO,
  // //   ref: 'heads/replace-elm-with-gatsby',
  // // });


  // // console.log(ref);

  // const s = await octokit.git.getCommit({
  //   owner: ENV_ORG,
  //   repo: ENV_REPO,
  //   sha: '691e2c62db5f0f9ca142bd5a8ffebfdf4f45d1de',
  // });

  // console.log(await s);

  // ➜  ~ curl https://api.github.com/repos/chaos-monkeys/git-chaos/commits\?sha\=replace-elm-with-gatsby

  // console.log(commits);

  // const sha = commits.data.map((o) => o.sha);
  // commits.data.map((o) => console.log(o.commit));

  // await fetch('https://api.github.com/repos/chaos-monkeys/git-chaos/git/commits\?sha\=2f3da1999bf371c104ef1ff9ec93b4b35fc03949')

  // const repo = await client.repo(`${ENV_ORG}/${ENV_REPO}`);
  // console.log(await repo);
  // console.log(await repo.info());

  // const s = await repo.commits();
  // console.log(s);


  // commit.info().then((infos) => { console.log(infos); });


  // await repo.commits().then((commits) => { console.log(commits); });


  // repo.info().then((infos) => { console.log(infos); });


  // client.repo.gitCommit('2f3da1999bf371c104ef1ff9ec93b4b35fc03949');
  // console.log(commit);

  // commit.info().then((infos) => { console.log(infos); });


  // repo.commits().then((commits) => { });


  // repo.commits().then((commits) => { console.log(commits); });


  // client.repo().commits().then((commits) => { console.log(commits); });


  // console.log(branchLevel);
  // console.log(parseFiles(files));
  // console.log(parseStats(stats));

  // const thing = await axios.get(url);
})();
