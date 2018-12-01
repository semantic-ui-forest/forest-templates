#!/bin/bash

version=$1

for html in bootstrap/*/html/index.html semantic-ui/*/html/index.html
do
    echo -n "upgrade $html with semantic-ui $version ..."
    sed -i '' "s/semantic-ui\/2.3.3\/semantic.min.css/semantic-ui\/$version\/semantic.min.css/" $html
    echo " done"
done
