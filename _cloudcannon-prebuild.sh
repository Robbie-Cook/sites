set -e
set -o pipefail

if [ STORYBOOK ]; then
  cd packages/react-components
  npm run build-storybook
else
  cd packages/personal-website
  npx lerna bootstrap
  npm run build
fi


