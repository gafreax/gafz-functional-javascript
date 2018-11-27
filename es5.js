function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(goodUser => goodUser.id == submittedUser.id);
    });
  };
}

module.exports = checkUsersValid;
