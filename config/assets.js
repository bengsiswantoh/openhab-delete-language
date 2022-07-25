const assetsPath = "openhab-android/assets/store_descriptions";
const metadataPath = "openhab-android/fastlane/metadata/android";

const keeps = ["en-US", "id-ID"];
const fileToDelete = [
  "strings.xml",
  "full_description.txt",
  "short_description.txt",
];

module.exports = {
  assetsPath,
  metadataPath,
  keeps,
  fileToDelete,
};
