const standardBasePath = `/`;
const path = require('path');

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;

  const basePath = themeOptions.basePath || standardBasePath;

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/cara.tsx`),
  });
  createPage({
    path: path.resolve(basePath, 'blog'),
    component: require.resolve(`./src/templates/blog.tsx`),
  });
};
