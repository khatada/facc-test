"use strict"
const webpack = require("webpack");

module.exports = [{
    entry: {
      "index": "./src/index.tsx"
    },
    output: {
        path: __dirname,
        filename: "./build/[name].js",
    },
    module: {
      rules: [
        { test: /\.ts(x?)$/, use: "ts-loader" }
      ]
    },
    devtool: "source-map",
    target: "web",
    resolve: {
      extensions: [".js", ".ts" ,".tsx"]
    }
}];
