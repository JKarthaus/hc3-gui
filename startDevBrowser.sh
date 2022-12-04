#!/bin/bash

cowsay "Start Dev Browser - without CORS Check"

google-chrome "http://localhost:4200" --disable-web-security --user-data-dir=/tmp/devBrowser
