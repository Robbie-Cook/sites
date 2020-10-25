set -e
set -o pipefail

if [ $STORYBOOK ]; then
  cd packages/react-components
  npm i
  npm run build-storybook
else
  cd packages/personal-website
  npm i
  npm run build
fi


