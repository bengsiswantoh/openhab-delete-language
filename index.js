const fs = require("fs");

require("dotenv").config();

const srcPath = __dirname + "/../" + process.env.SRC_PATH;
const mainPath = srcPath + process.env.MAIN_PATH;
const destinationPath = srcPath + process.env.DESTINATION_PATH;

const keeps = ["values", "values-in"];

const deleteFiles = () => {
  const files = [];
  fs.readdirSync(mainPath).forEach((file1) => {
    if (file1.includes("values") && !keeps.includes(file1)) {
      const valuePath = `${mainPath}/${file1}`;
      fs.readdirSync(valuePath).forEach((file2) => {
        if (file2 === "strings.xml") {
          files.push(`${valuePath}/${file2}`);
        }
      });
    }
  });

  for (const file of files) {
    try {
      fs.unlinkSync(file);
      console.log(`successfully deleted ${file}`);
    } catch (err) {
      // handle the error
      console.error(err);
    }
  }
};

const copyFiles = () => {
  for (const file of keeps) {
    const source = `${mainPath}/${file}/strings.xml`;
    const destination = `${destinationPath}/${file}/strings.xml`;
    if (fs.existsSync(source)) {
      fs.copyFile(source, destination, (err) => {
        if (err) throw err;
        console.log(`${source} was copied to ${destination}`);
      });
    }
  }
};

const main = () => {
  deleteFiles();
  copyFiles();
};

main();
