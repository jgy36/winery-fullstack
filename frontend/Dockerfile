# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package.json .
RUN npm install
COPY . .

# Expose the port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]