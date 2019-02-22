const _ = require('log-timestamp');

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function main() {
  if (process.argv.length != 3) {
    process.stderr.write(`wrong number of arguments.
    node upgrade-html-react.js oldSemanticUIVersion newSemanticUIVersion
    `)
  }

  const oldSemanticUIVersion = process.argv[2];
  const newSemanticUIVersion = process.argv[3];

  for (let category of ["bootstrap", "semantic-ui"]) {
    for (let template of fs.readdirSync(category)) {
      console.log(`Upgrade ${category}/${template} semantic to latest version...`);
      execSync("yarn upgrade --latest semantic-ui-react", {
        cwd: path.join(category, template, "react")
      })
    }
  }
}

main()
