const app = require("./server.js");
const cleanup = require("./cleanup.js");

module.exports = () => {
  let port = parseInt(process.argv[2]);

  if(!port) return console.error("Please provide a port.");

  try {
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
      .on("error", (err) => {
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
      })
      .on("close", () => {
        cleanup();
      });
  } catch(err) {
      if(port < 0 || port > 65536) {
        console.error("Invalid port, your port number should be between and including 0 and 65535");
      } else {
        console.error("Unexpected error:", err);
      }

      cleanup();
  }
}

