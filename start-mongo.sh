#!/bin/bash
if ! docker ps -a | grep rpgmylife-mongo; then
  docker run -d --name rpgmylife-mongo -p 27017:27017 mongo:latest
fi
tail -f /dev/null