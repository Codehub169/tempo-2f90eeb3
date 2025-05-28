#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

echo "INFO: Starting hueneu application setup..."

# Navigate to the application directory if needed (assuming script is run from project root)
# cd /path/to/your/app

# Install dependencies (backend and frontend dev dependencies like react-scripts)
echo "INFO: Installing dependencies..."
npm install

# Initialize the database
echo "INFO: Initializing database..."
node database.js

# Build the frontend application
# The react-scripts build command outputs to a 'build' folder by default.
echo "INFO: Building frontend application..."
npm run build-frontend

# Start the server on port 9000
echo "INFO: Starting server on port 9000..."
# server.js will be configured to use port 9000. PORT env var can override if needed.
export PORT=9000
npm start
