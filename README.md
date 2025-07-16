# node_api_demo
Demo project using Node.js, Express.js, and MongoDB with a clean and scalable folder structure. 
Includes full CRUD functionality, environment-based configuration, and best practices for organizing routes, 
controllers, models, and middleware. Ideal for learning or kickstarting RESTful API development.

### File Structure

demo/
├── config/
│   └── db.js
│
├── controllers/
│   └── user.controller.js **Exampal**
│
├── models/
│   └── user.model.js **Exampal**
│
├── routes/
│   └── user.routes.js **Exampal**
│
├── middlewares/
│   └── errorHandler.js **Exampal**
│
├── .env
├── app.js
├── server.js
└── package.json

### Installation

Follow these steps to get your project up and running:

1. **Clone the repository**
   ```sh
   git clone https://github.com/MrRitesh1/node_api_demo.git
   ```
 
2. **Navigate to the project directory**
   ```sh
   cd node_api_demo
   ```
3. **Install dependencies**
   ```sh
   npm install || yarn || pnpm install
   ```

   **Install dependencies error**
   ```sh
   error At line:1 char:1
   + yarn add eslint --dev

   solution run this command:
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
4. **Start the development server**
   ```sh
  npm run dev || yarn run dev || pnpm run dev
   ```
5. **optional all packages update**

   ```sh
    npm up --latest || yarn up --latest || pnpm up --latest
   ```

6. **optional trminal clear**

   ```sh
   cls || clear
   ```

7. **optional nvm**

   ```sh
   nvm --version
   nvm list available
   nvm install 24.4.0      # Install Node 24.4.0
   nvm use 24.4.0         # Use Node 24.4.0
   nvm list                 # Show installed versions
   nvm uninstall 18.18.0    # Remove Node 18.18.0
   nvm alias default 24.4.0  # Set default version
   ```

8. **optional node v**

   ```sh
   v24.4.0
   ```

### MongoDB Setup

Follow these steps to get your project up and running:

1. **Installation**
   ```sh
   Go to: https://www.mongodb.com/try/download/community
   ```