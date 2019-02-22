#!/bin/bash

old_version=$1
new_version=$2

for html in bootstrap/*/html/index.html semantic-ui/*/html/index.html
do
    echo -n "upgrade $html with semantic-ui from $old_version to $new_version ..."
    sed -i '' "s/semantic-ui\/$old_version\/semantic.min.css/semantic-ui\/$new_version\/semantic.min.css/" $html
    sed -i '' "s/semantic-ui\/$old_version\/semantic.min.js/semantic-ui\/$new_version\/semantic.min.js/" $html
    echo " done"
done
