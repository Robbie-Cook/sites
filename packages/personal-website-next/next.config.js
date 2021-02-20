const withMDX = require("@next/mdx")();
const withTM = require("next-transpile-modules")(["react-spring"]);
module.exports = withTM(
  withMDX({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

			config.module.rules.push({
				test: /\.svg$/,
				issuer: {
					test: /\.(js|ts)x?$/,
				},
				use: ['@svgr/webpack'],
			});

      // Important: return the modified config
      return config;
    },
  })
);
