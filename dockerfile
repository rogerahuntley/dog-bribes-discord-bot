# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Install PM2
RUN npm install -g pm2

# Copy only package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Clean Cache
RUN npm cache clean --force

# Set the entrypoint script
ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]