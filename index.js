const fs = require("fs");

require("dotenv").config();

const deleteFiles = () => {
  const openhabPath = __dirname + "/.." + process.env.OPENHAB_PATH;

  const files = [];
  const ignores = ["values", "values-in"];
  fs.readdirSync(openhabPath).forEach((file1) => {
    if (file1.includes("values") && !ignores.includes(file1)) {
      const valuePath = `${openhabPath}/${file1}`;
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

deleteFiles();
