set -e
set -o pipefail

cd packages/personal-website
npm i
npm run build