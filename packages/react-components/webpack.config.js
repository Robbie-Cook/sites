const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: "Components",
    libraryTarget: "commonjs2",
  },

  mode: "production",
  target: "node",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../node_modules'),
      'node_modules'
    ],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /(\.ts(x?))|(\.jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        loader: "markdown-loader",
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  // resolve: {
  //   alias: {
  //     // react: path.resolve("./node_modules/react"),
  //   },
  // },
  // externals: {
  //   'react': 'react', // Case matters here
  //   'react-dom' : 'react-dom' // Case matters here
  // },
  externals: [nodeExternals()],
  plugins: [],
};
