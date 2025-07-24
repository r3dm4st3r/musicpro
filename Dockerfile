# Use official Node.js 22 LTS image as a base image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the NestJS application using the Nest CLI
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3051

# Start the NestJS application in production mode
CMD ["npm", "run", "start"]