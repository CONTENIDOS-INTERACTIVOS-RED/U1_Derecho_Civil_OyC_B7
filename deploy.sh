#!/usr/bin/env bash
set -e

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

echo "v14" > .nvmrc
nvm use
npm i
node build.js
