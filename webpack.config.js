const path = require("path");

module.exports = {
  name: "boilerpate",
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src", "index.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
