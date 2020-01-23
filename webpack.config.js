const path = require("path");

const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  mode: process.env.MODE || "development",
  entry: path.join(__dirname, "/src"),
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "@interfaces": path.resolve(__dirname, "/src/ts-interfaces"),
      "@shared": path.resolve(__dirname, "src/components/SharedComponents")
    },
    enforceExtension: false,
    extensions: [".tsx", ".js", ".ts", ".jsx"]
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
