# Dockerfile
# Use Node.js as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the application
CMD ["node", "server.js"]
