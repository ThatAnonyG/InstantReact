const { join, resolve } = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"],
  },
];

module.exports = {
  entry: join(__dirname, "src", "index.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: join(__dirname, "public", "index.html"),
    }),
  ],
};
