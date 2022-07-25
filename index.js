const fs = require("fs");

require("dotenv").config();

const srcPath = __dirname + "/../" + process.env.SRC_PATH;
const destinationPath = srcPath + process.env.DESTINATION_PATH;
const stringSource = process.env.STRING_SOURCE;
const stringDestination = process.env.STRING_DESTINATION;

const keepAssets = ["en-US", "id-ID"];

const replaceString = () => {
  for (const file of keeps) {
    const fileName = `${destinationPath}/${file}/strings.xml`;
    fs.readFile(fileName, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/stringSource/g, stringDestination);

      fs.writeFile(someFile, result, "utf8", function (err) {
        if (err) return console.log(err);
        console.log(
          `replace ${stringSource} to ${stringDestination} in ${fileName}`
        );
      });
    });
  }
};

const main = () => {
  // replaceString();
};

main();
