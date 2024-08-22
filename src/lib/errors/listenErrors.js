const cleanup = require("./../cleanup.js");

module.exports.listenErrors = err => {
  switch(err.code) {
    case "EACCES":
      console.error("You need administravite permissions to access this port, please try adifferent one.");
      break;
    case "EADDRINUSE":
      console.error("Port already in use, try a different one.");
      break;
    default:
      console.log("Unexpected error:", err);
  }

  cleanup();
}

module.exports.catchErrors = (err, port) => {
  if(port < 0 || port > 65536) {
    console.error("Invalid port, your port number should be between and including", "\x1b[32m" + "0", "\x1b[0m" + "and", "\x1b[32m" + "65535" + "\x1b[0m" + ".");
  } else {
    console.error("Unexpected error:", err);
  }

  cleanup();
}

