function compareArrays(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }
      return arr1.every((item, i) => item === arr2[i]);
  }
  



  function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender)
}