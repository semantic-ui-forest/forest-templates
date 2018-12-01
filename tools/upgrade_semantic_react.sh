#!/bin/bash

version=$1
pwd=`pwd`

for react in bootstrap/*/react/ semantic-ui/*/react/
do
    echo -n "upgrade $json with semantic-ui $version ..."
    cd $react
    yarn upgrade semantic-ui-react@$version
    echo " done"
    cd $pwd
done
