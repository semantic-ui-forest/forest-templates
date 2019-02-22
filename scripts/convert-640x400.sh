#!/usr/bin/env bash

set -ex

for template in `ls bootstrap`
do
  convert -resize 640x400 \
  	bootstrap/$template/screenshots/$template-1440x900.png \
  	bootstrap/$template/screenshots/$template-640x400.png
done

for template in `ls semantic-ui`
do
  convert -resize 640x400 \
   	semantic-ui/$template/screenshots/$template-1440x900.png \
    semantic-ui/$template/screenshots/$template-640x400.png
done
