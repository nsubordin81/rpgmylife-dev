#!/bin/bash

# Check if container exists and remove if stopped
if docker ps -a --filter "name=rpgmylife-mongo" --format '{{.Status}}' | grep -q "Up"; then
    echo "MongoDB container is already running"
else
    # Remove existing container if it exists
    if docker ps -a --filter "name=rpgmylife-mongo" --format '{{.Names}}' | grep -q "rpgmylife-mongo"; then
        echo "Removing stopped MongoDB container"
        docker rm rpgmylife-mongo
    fi
    
    echo "Creating new MongoDB container"
    docker run -d --name rpgmylife-mongo -p 27017:27017 mongo:latest
fi

# Keep script running
tail -f /dev/null