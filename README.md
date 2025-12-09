# MERN_PROJECT_BMSCE

This repository gives you a simple and clean starting point to create a **full-stack MERN application** (MongoDB, Express, React, Node.js).

---

## Prerequisites

Make sure you have installed on your system:

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- MongoDB Atlas account (or a MongoDB cluster URI)

---

## How to Run the MERN App

All commands below are run from a terminal in the project root folder `MERN_PROJECT_BMSCE`.

### 1. Start the React Client

```bash
cd my_first_mern_app
cd client
npm install
npm run dev
```

Then open the **localhost** link shown in the terminal (Vite dev server URL).

### 2. Start the Node/Express Server

Open a **new terminal** (or tab) and from the project root run:

```bash
cd my_first_mern_app
cd server
npm install
```

Now configure your MongoDB connection:

1. Open `my_first_mern_app/server/index.js`.
2. Find the line with:
   ```js
   mongoose.connect(
   ```
3. Paste your MongoDB cluster connection string (URI) there.
4. Append the query parameter `appName=Cluster0` if required by your setup.

Finally, start the server:

```bash
node index.js
```

- The backend will listen on `http://localhost:3001` (as used in the React app).
- The React frontend (Vite) runs on another port (usually `5173` by default).

---

## Project Structure (Quick Overview)

- `my_first_mern_app/client` – React frontend (forms, tables, UI)
- `my_first_mern_app/server` – Node.js + Express + Mongoose backend
- `my_first_mern_app/server/models` – Mongoose models (e.g., `users.js`)
- `docs/` – HTML files for teaching/explaining MERN and MongoDB basics
- `js_warmup/` – JavaScript basics and small practice files

---

## Contact

- LinkedIn:  
  https://www.linkedin.com/in/nikhil-sk-0a85871aa/

- Instagram (for people not on LinkedIn :P):  
  `nikhil_sk24`
