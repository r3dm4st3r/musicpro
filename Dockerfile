# Base image
FROM node:22

# Inject build-time variable
ARG API_SERVER
ENV API_SERVER=$API_SERVER

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy app source
COPY . .

# ✅ Re-inject ENV before build so Next sees it
ENV NEXT_PUBLIC_API_SERVER=$API_SERVER

# Build the app (Next will use NEXT_PUBLIC_API_SERVER)
RUN npm run build

# Expose app port
EXPOSE 3051

# Runtime ENV (optional)
ENV NODE_ENV=production

# Start the app
CMD ["npm", "run", "start"]
