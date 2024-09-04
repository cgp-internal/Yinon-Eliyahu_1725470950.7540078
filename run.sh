#!/bin/bash

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Initialize a new Node.js project
npm init -y

# Install Express.js
npm install express

# Run the app
node app.js