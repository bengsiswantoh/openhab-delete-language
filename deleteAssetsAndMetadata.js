const fs = require("fs");

const {
  keeps,
  assetsPath,
  metadataPath,
  fileToDelete,
} = require("./config/assets");

const deleteFiles = (path) => {
  path = `${__dirname}/../${path}`;

  fs.readdirSync(path).forEach((directory) => {
    if (!keeps.includes(directory)) {
      const valuePath = `${path}/${directory}`;
      const condition =
        !keeps.includes(directory) && fs.lstatSync(valuePath).isDirectory();

      if (condition) {
        fs.readdirSync(valuePath).forEach((file) => {
          if (fileToDelete.includes(file)) {
            try {
              fs.unlinkSync(`${valuePath}/${file}`);
              console.log(`delete file ${valuePath}/${file}`);
            } catch (err) {
              console.error(err);
            }
          }
        });

        if (fs.readdirSync(valuePath).length === 0) {
          fs.rmdirSync(valuePath);
          console.log(`delete directory ${valuePath}`);
        }
      }
    }
  });
};

const main = () => {
  deleteFiles(assetsPath);
  deleteFiles(metadataPath);
};

main();
