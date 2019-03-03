require('console-stamp')(console, { colors: { stamp: 'yellow' } });

const fs = require("fs");
const path = require("path");

function main() {
  if (process.argv.length !== 4) {
    process.stderr.write("wrong number of arguments.\n");
    process.stderr.write(
      "node upgrade-html-react.js oldSemanticUIVersion newSemanticUIVersion\n"
    );
    process.exit(-1);
  }

  let content, srcHtmlPath, destHtmlPath;

  const oldSemanticUIVersion = process.argv[2];
  const newSemanticUIVersion = process.argv[3];

  for (let category of ["bootstrap", "semantic-ui"]) {
    for (let template of fs.readdirSync(category)) {
      console.log(
        `Upgrade ${category}/${template} html semantic to from` +
        ` ${oldSemanticUIVersion} to ${newSemanticUIVersion}...`
      );
      srcHtmlPath = path.join(category, template, "html/index.html");
      destHtmlPath = path.join(category, template, "html/index.html");
      content = fs.readFileSync(srcHtmlPath, "utf-8");
      fs.writeFileSync(
        destHtmlPath,
        content.replace(
          `semantic-ui/${oldSemanticUIVersion}/semantic.min.css`,
          `semantic-ui/${newSemanticUIVersion}/semantic.min.css`
        )
      );
    }
  }
}

main();
