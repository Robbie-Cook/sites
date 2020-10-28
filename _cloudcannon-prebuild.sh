set -e
set -o pipefail

if [ $STORYBOOK ]; then
  cd packages/react-components
  npx lerna bootstrap
  npm run build-storybook
else
  # cd packages/personal-website
  # rm -rf node_modules
  # npx lerna bootstrap
  # npm run build
fi


