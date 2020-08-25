const standardBasePath = `/`;
const path = require('path');

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;

  const basePath = themeOptions.basePath || standardBasePath;

  createPage({
    path: path.resolve(basePath, 'blog'),
    component: require.resolve(`./src/blog.tsx`),
  });
};
