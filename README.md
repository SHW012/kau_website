# kau website

This project is a React web application for the KAU program. To run or test the project locally you will need Node.js and npm installed.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   This uses `react-scripts start` and will launch the app at `http://localhost:3000`.

3. Run tests (requires dependencies from step 1):
   ```bash
   npm test
   ```
   The first run may fail if packages like `react-scripts` are missing, so always run `npm install` beforehand.

4. Run the sample authentication server:
   ```bash
   cd server
   npm install
   npm start
   ```
   This Express server issues JWT tokens on `/api/login` and stores them in an `HttpOnly` cookie. API requests from the React app are proxied to `http://localhost:8080`.


