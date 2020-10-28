set -e
set -o pipefail

if [ $STORYBOOK ]; then
  cd packages/react-components
  yarn install
  npm run build-storybook
else
  cd packages/personal-website
  rm -rf node_modules
  yarn install
  npm run build
fi


