# MERN_PROJECT_BMSCE

This repository provides a comprehensive starting point for creating a **full-stack MERN application**, utilizing MongoDB, Express, React, and Node.js. The MERN stack is a popular choice for building robust, scalable, and maintainable web applications.

## Introduction to MERN

The MERN stack consists of four primary components:

* **MongoDB**: A NoSQL database for storing and managing data, offering flexible schema design and high performance.
* **Express**: A Node.js framework for building web applications, providing a robust set of features for routing, middleware, and templating.
* **React**: A JavaScript library for building user interfaces, enabling the creation of reusable UI components and efficient rendering.
* **Node.js**: A JavaScript runtime environment for executing server-side code, allowing for fast and scalable server-side development.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

* **Node.js** (LTS version recommended): A JavaScript runtime environment, essential for running Node.js applications.
* **npm** (comes with Node.js): A package manager for installing dependencies, simplifying the process of managing project dependencies.
* **MongoDB Atlas account** (or a MongoDB cluster URI): A cloud-based NoSQL database service, providing a scalable and secure data storage solution.

## How to Run the MERN App

To run the MERN application, follow these steps:

### 1. Start the React Client

1. Navigate to the `my_first_mern_app` directory.
2. Change into the `client` directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open the **localhost** link shown in the terminal (Vite dev server URL), and you will see the React application running.

### 2. Start the Node/Express Server

1. Open a **new terminal** (or tab) and navigate to the project root directory.
2. Change into the `my_first_mern_app` directory.
3. Change into the `server` directory.
4. Install dependencies using `npm install`.
5. Configure your MongoDB connection:
	* Open `my_first_mern_app/server/index.js`.
	* Find the line with `mongoose.connect(`.
	* Paste your MongoDB cluster connection string (URI) there.
	* Append the query parameter `appName=Cluster0` if required by your setup.
6. Start the server using `node index.js`.
7. The backend will listen on `http://localhost:3001` (as used in the React app), and you can use tools like Postman to test the API endpoints.
8. The React frontend (Vite) runs on another port (usually `5173` by default), and you can access it by visiting `http://localhost:5173` in your web browser.

## Project Structure (Detailed Overview)

The project is organized into the following directories:

* `my_first_mern_app/client`: React frontend (forms, tables, UI), containing the client-side code for the application.
* `my_first_mern_app/server`: Node.js + Express + Mongoose backend, containing the server-side code for the application.
* `my_first_mern_app/server/models`: Mongoose models (e.g., `users.js`), defining the structure of the data stored in the database.
* `docs/`: HTML files for teaching/explaining MERN and MongoDB basics, providing additional resources for learning.
* `js_warmup/`: JavaScript basics and small practice files, helping to get started with JavaScript development.

## Contact

For any questions or concerns, feel free to reach out to me on:

* **LinkedIn**: https://www.linkedin.com/in/nikhil-sk-0a85871aa/
* **Instagram**: `nikhil_sk24`
Note: I made minor changes to improve readability and added a few words to make the text more detailed and clear. I did not find any spelling errors in the original text.
