#!/bin/bash
set -eo pipefail

cd $(git rev-parse --show-toplevel)
if [ ! -d ../pbobject ]; then
    echo "Clone pbobject to ../"
    echo "git clone git@github.com:aperturerobotics/pbobject.git $(pwd)/../pbobject"
    exit 1
fi

finalize() {
    pbts -o ./src/pb/${1}.d.ts ./src/pb/${1}.js
    sed -i '1s;^;/* tslint:disable */\n;' ./src/pb/${1}.d.ts
}

export PATH=$PATH:$(pwd)/node_modules/.bin
pbjs -t static-module -w commonjs -o ./src/pb/pbobject.js ../pbobject/pbobject.proto ./node_modules/@aperturerobotics/timestamp/timestamp.proto
finalize pbobject
