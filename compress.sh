#!/bin/bash
tar --exclude="node_modules" --exclude="build" --exclude=".env" --exclude=".github" --exclude=".git"  --exclude="SERVICE.tgz"  --exclude=".idea" --exclude="docker" -zcvf SERVICE.tgz .
cp SERVICE.tgz ./docker && rm -rf SERVICE.tgz
