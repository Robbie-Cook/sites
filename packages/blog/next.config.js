const withPlugins = require('next-compose-plugins');

const withMDX = require("@next/mdx")();

const withTM = require("next-transpile-modules")([
  "@robbie-cook/react-components",
]);

const webpack = (config, options) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

// module.exports = withTM({ webpack: withMDX({ webpack }) });

module.exports = withPlugins([withTM], [withMDX], webpack);
