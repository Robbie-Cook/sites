set -e
set -o pipefail

cd packages/personal-website
npx lerna bootstrap
npm run build