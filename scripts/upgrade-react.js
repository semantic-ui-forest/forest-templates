require('console-stamp')(console, { colors: { stamp: 'yellow' } });

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function main() {
  for (let category of ["bootstrap", "semantic-ui"]) {
    for (let template of fs.readdirSync(category)) {
      console.log(`Upgrade ${category}/${template} react to latest version...`);
      execSync("yarn upgrade --latest semantic-ui-react", {
        cwd: path.join(category, template, "react")
      });
    }
  }
}

main();
