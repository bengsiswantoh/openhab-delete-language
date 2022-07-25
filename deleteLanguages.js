const fs = require("fs");

const { keeps, mainPath } = require("./config/languages");

const deleteLanguages = () => {
  const path = `${__dirname}/../${mainPath}`;

  fs.readdirSync(path).forEach((directory) => {
    const valuePath = `${path}/${directory}`;
    const condition =
      directory.includes("values") &&
      !keeps.includes(directory) &&
      fs.lstatSync(valuePath).isDirectory();

    if (condition) {
      fs.readdirSync(valuePath).forEach((file) => {
        if (file === "strings.xml") {
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
  });
};

deleteLanguages();
