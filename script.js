function createDreamTeam(members) {
  if (!Array.isArray(members)) return false

  let newArr = [];
    if (members !== undefined && members !== null) {
      for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
          let j = 0;  

          while (true) {
            if (members[i][j] == ' ') {
              i++;
            } else {
              newArr.push(members[i])
              break;
            }
          }
        } 
      }

      console.log(newArr.map(item => item[0].toUpperCase()).join(''));
    }        

  return false;
};

createDreamTeam([
  'Amelia',
  'Grace',
  'Lily',
  'Ruby',
])