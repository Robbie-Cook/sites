const withMDX = require("@next/mdx")();

const webpack = (config, options) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

module.exports = withMDX({ webpack });
