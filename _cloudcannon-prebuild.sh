set -e
set -o pipefail

if [ $STORYBOOK ]; then
  cd packages/react-components
  npm i
  npm run build-storybook
else
  cd packages/personal-website
  rm -rf node_modules
  npm i
  npm run build
fi


