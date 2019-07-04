const path = require('path');

const SRC_DIR = path.join(__dirname, '/react/src/');
const DIST_DIR = path.join(__dirname, '/react/dist');
console.log(SRC_DIR)
module.exports = {
  entry: path.join(__dirname, '/react/src'),
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}