require("dotenv").config();

const rootPath = "openhab-android/mobile/src";
const mainPath = rootPath + "/" + "main/res";
const destinationPath = rootPath + "/" + process.env.DESTINATION_PATH;

const keeps = ["values", "values-in"];

module.exports = {
  mainPath,
  destinationPath,
  keeps,
};
