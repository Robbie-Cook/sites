const withPlugins = require("next-compose-plugins");

const CircularDependencyPlugin = require("circular-dependency-plugin");

const withMDX = require("@next/mdx")();

const withTM = require("next-transpile-modules")([
  "@robbie-cook/react-components",
]);

const webpack = (config, options) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.plugins.push(
    new CircularDependencyPlugin({
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    })
  );

  return config;
};

// module.exports = withTM({ webpack: withMDX({ webpack }) });

module.exports = withPlugins([withTM], [withMDX], webpack);
