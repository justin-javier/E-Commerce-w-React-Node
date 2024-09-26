# Use the official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the backend will run
EXPOSE 5000

#CMD ["sequelize-cli", "db:migrate"]
#CMD ["sequelize-cli", "db:seed:all"]

# Command to start the backend server
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npx nodemon src/server.js"]
#CMD ["npm", "run", "start:watch"]
#CMD ["npm", "start"]


