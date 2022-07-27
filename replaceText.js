const fs = require("fs");

const { keeps, destinationPath } = require("./config/languages");

const replaceText = (words) => {
  const path = `${__dirname}/../${destinationPath}`;

  for (const file of keeps) {
    const fileName = `${path}/${file}/strings.xml`;
    fs.readFile(fileName, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }

      for (const word of words) {
        const { source, destination } = word;
        data = data.replace(source, destination);
        console.log(`replace ${source} to ${destination}`);
      }

      fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) return console.log(err);
        console.log(`overwrite success in ${destinationPath}`);
      });
    });
  }
};

const words = [
  { source: /openHAB/g, destination: "Philoin" },
  { source: " open source", destination: "" },
  { source: /rumah/g, destination: "gedung" },
  { source: /for your home/g, destination: "for your building" },
  { source: /Control your home/g, destination: "Control your building" },
];

replaceText(words);
