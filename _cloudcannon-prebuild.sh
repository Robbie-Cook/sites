set -e
set -o pipefail

exit(1);

cd packages/personal-website
npm i
npm run build