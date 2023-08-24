const user = [];


function isValid(username) {
  let isValid = true;
  isValid = !!username && username.trim();
  isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
  
  return isValid;
}


function setUserData(username) {
  return user.push(username)
}

function getUserData(username){
  return username
}


module.exports = {
  user,
  isValid,
  getUserData,
  setUserData,
  
  
};
