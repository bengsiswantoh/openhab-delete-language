const fs = require("fs");

const { keeps, mainPath } = require("./config/languages");

const deleteLanguages = () => {
  const path = `${__dirname}/../${mainPath}`;
  console.log(path);

  const files = [];
  fs.readdirSync(path).forEach((directory) => {
    if (directory.includes("values") && !keeps.includes(directory)) {
      const valuePath = `${path}/${directory}`;
      fs.readdirSync(valuePath).forEach((file) => {
        if (file === "strings.xml") {
          files.push(`${valuePath}/${file}`);
        }
      });
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

deleteLanguages();
