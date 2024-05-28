#!/bin/bash

echo 'Changing directory to "api".'
cd api || exit

echo 'Starting database REST API Server.'
npm start &

echo 'Changing directory to "client".'
cd ../client || exit

echo "Starting the client."
npm start