const uuid = require('uuid').v4;

const sessions = {};



function addSession(username) {
  const sid = uuid();
  sessions[sid] = {username,};
  return sid;
};

function getSessionUser(sid) {
  return sessions[sid]?.username;
}

function deleteUser(username, sid) {
  delete sessions.username;
  console.log(username)
  
}
function deleteSession(sid, username) {
  delete sessions[sid].username;
  delete sessions[sid];
}



module.exports = {
  addSession,
  deleteSession,
  getSessionUser,
  deleteUser
};

