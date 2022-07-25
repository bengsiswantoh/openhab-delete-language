const fs = require("fs");

const {
  keeps,
  assetsPath,
  metadataPath,
  fileToDelete,
} = require("./config/assets");

const deleteFiles = (path) => {
  path = `${__dirname}/../${path}`;

  const files = [];
  fs.readdirSync(path).forEach((directory) => {
    if (!keeps.includes(directory)) {
      const valuePath = `${path}/${directory}`;
      const condition =
        !keeps.includes(directory) && fs.lstatSync(valuePath).isDirectory();

      if (condition) {
        fs.readdirSync(valuePath).forEach((file) => {
          if (fileToDelete.includes(file)) {
            files.push(`${valuePath}/${file}`);
          }
        });
      }
    }
  });

  for (const file of files) {
    try {
      fs.unlinkSync(file);
      console.log(`successfully deleted ${file}`);
    } catch (err) {
      console.error(err);
    }
  }
};

const main = () => {
  deleteFiles(assetsPath);
  deleteFiles(metadataPath);
};

main();
