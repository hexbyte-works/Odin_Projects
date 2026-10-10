// private property are the member that are not accessable outside the  function
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;//it is only accessable by the function
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };// passes the reference of the function but not the variable
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// console.log(josh.reputation) will fail because reputation is a local variable and is only acessable in local scope