const app = require("./server.js");
const cleanup = require("./cleanup.js");
const { listenErrors, catchErrors } = require("./errors/listenErrors.js");

module.exports = () => {
  let port = parseInt(process.argv[2]);
  if(!port) port = 0;

  try {
    const listen = app.listen(port, () => console.log(`Server running at`, "\x1b[32m" + `http://localhost:${listen.address().port}` + "\x1b[0m" + "."))
      .on("error", listenErrors)
      .on("close", cleanup);
  } catch(err) { catchErrors(err, port) }
}

