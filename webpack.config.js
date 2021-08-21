module.exports = {
  entry: "./src/views/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};