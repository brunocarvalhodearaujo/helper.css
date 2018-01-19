#!/usr/bin/env bash

echo "building compressed css"

$PWD/node_modules/.bin/node-sass src/main.scss dist/helper.css

echo "building compressed css"

$PWD/node_modules/.bin/node-sass --output-style compressed src/main.scss dist/helper.min.css
