const fs = require("fs");
const path = require("path");

const script = `<script>(async () => {const res = await fetch("/server-stream", {headers: {"Accept": "text/event-stream"}});for(const reader = res.body.getReader(); ;) {const { value, done } = await reader.read();const chunk = new TextDecoder().decode(value);if(chunk == "change") {console.log("Change?");window.location.reload();}}})();</script>`;

module.exports = (filePath, content) => {
  try {
    const newContent = content.replace("</body>", `</body>\n${script}`);

    fs.writeFileSync(
      filePath,
      newContent
    );
  } catch(err) {
    throw new Error(err);
  }
}

