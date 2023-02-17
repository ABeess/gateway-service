#!/bin/bash

cd /SERVICE

CONFIG_ARGS="s|CONFIG_PORT|${CONFIG_PORT}|g;\
        	s|CONFIG_NESTJS_SERVICE|${CONFIG_NESTJS_SERVICE}|g"
sed -i -e "$CONFIG_ARGS" .env

yarn start

exec "$@"