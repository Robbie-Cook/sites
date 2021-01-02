set -e
set -o pipefail

if [ $STORYBOOK ]; then
  cd packages/react-components
  npx yarn install
  npx yarn run build-storybook
else
  cd packages/personal-website
  rm -rf .cache
  npx yarn install
  npx yarn run build
fi


