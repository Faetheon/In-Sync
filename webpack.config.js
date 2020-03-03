const path = require("path");

const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  mode: process.env.MODE || "development",
  entry: SRC_DIR,
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      interfaces: path.resolve(__dirname, "./src/ts-interfaces"),
      sharedFiles: path.resolve(__dirname, "./shared"),
      sharedComponents: path.resolve(
        __dirname,
        "./src/Components/SharedComponents"
      )
    },
    enforceExtension: false,
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
