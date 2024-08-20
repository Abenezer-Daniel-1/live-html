const fs = require("fs");
const path = require("path");

module.exports = () => {
  try {
    const targetFolder = path.join(process.cwd(), "live-html-147");

    if(!fs.existsSync(targetFolder)) return process.exit();
    fs.rmSync(targetFolder, { recursive: true });
  } catch(err) {
    console.error(err);

    process.exit();
  }
}

