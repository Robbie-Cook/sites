set -e
set -o pipefail

npx lerna bootstrap


if [ STORYBOOK ]; then
  cd packages/react-components
  npm run build-storybook
else
  cd packages/personal-website
  npm run build
fi


