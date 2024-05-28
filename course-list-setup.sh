#!/bin/bash

echo 'Changing directory to "api". Installing dependencies.'
cd api || exit
npm i

echo 'Seeding database.'
npm run seed

echo 'Starting database REST API Server.'
npm start &

echo 'Changing directory to "client". Installing dependencies.'
cd ../client || exit
npm i

echo "Starting the client."
npm start