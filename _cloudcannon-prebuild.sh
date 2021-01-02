set -e
set -o pipefail

if [ $STORYBOOK ]; then
  cd packages/react-components
  npx yarn install
  npx yarn run build-storybook
else
  cd packages/personal-website
  npx yarn install
  npx yarn cache clean
  npx yarn run build
fi


