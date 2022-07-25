const fs = require("fs");

const { keeps, mainPath, destinationPath } = require("./config/languages");

const copyLanguages = () => {
  const path = `${__dirname}/..`;

  for (const file of keeps) {
    const source = `${path}/${mainPath}/${file}/strings.xml`;
    const destination = `${path}/${destinationPath}/${file}/strings.xml`;
    if (fs.existsSync(source)) {
      fs.copyFile(source, destination, (err) => {
        if (err) throw err;
        console.log(`${source} was copied to ${destination}`);
      });
    }
  }
};

copyLanguages();
