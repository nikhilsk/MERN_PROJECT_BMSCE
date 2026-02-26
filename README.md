# MERN Stack Starter Project - BMSCE

This repository provides a comprehensive and beginner-friendly starting point for students learning to build **full-stack MERN applications** (MongoDB, Express, React, Node.js). It includes practical examples, warmup exercises, and a complete MERN application template.

---

## What You'll Learn

This project is designed to help students understand:

- **Frontend Development**: Building interactive user interfaces with React and Vite
- **Backend Development**: Creating RESTful APIs with Node.js and Express
- **Database Management**: Working with MongoDB and Mongoose ODM
- **Full-Stack Integration**: Connecting frontend and backend components
- **JavaScript Fundamentals**: Practice exercises to strengthen core JavaScript skills

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (LTS version recommended - v16 or higher)
- **npm** (comes bundled with Node.js)
- **MongoDB Atlas account** (or a local MongoDB installation with cluster URI)
- A code editor like **VS Code** (recommended)

---

## How to Run the MERN App

All commands below should be run from a terminal in the project root folder `MERN_PROJECT_BMSCE`.

### 1. Start the React Client (Frontend)

Open a terminal and run:

```bash
cd my_first_mern_app
cd client
npm install
npm run dev
```

Then open the **localhost** link shown in the terminal (typically `http://localhost:5173` for Vite dev server).

### 2. Start the Node/Express Server (Backend)

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

- The backend will listen on `http://localhost:3001` (as configured in the React app).
- The React frontend (Vite) runs on a separate port (usually `5173` by default).

---

## Project Structure (Detailed Overview)

```
MERN_PROJECT_BMSCE/
├── my_first_mern_app/
│   ├── client/              # React frontend application
│   │   ├── src/             # React components, forms, and UI logic
│   │   └── package.json     # Frontend dependencies
│   └── server/              # Node.js + Express backend
│       ├── models/          # Mongoose schemas (e.g., users.js)
│       ├── index.js         # Main server file with API routes
│       └── package.json     # Backend dependencies
├── docs/                    # Educational HTML files explaining MERN and MongoDB
├── js_warmup/               # JavaScript practice exercises
│   ├── counter.html         # Interactive counter with increment/decrement buttons
│   ├── todolist.html        # Simple todo list with add/modify/delete functionality
│   └── ...                  # Other JavaScript warmup exercises
└── README.md                # This file
```

### Key Directories Explained:

- **`my_first_mern_app/client`** – React frontend with forms, tables, and interactive UI components
- **`my_first_mern_app/server`** – Node.js + Express + Mongoose backend with RESTful API endpoints
- **`my_first_mern_app/server/models`** – Mongoose models defining database schemas (e.g., `users.js`)
- **`docs/`** – HTML documentation files for teaching MERN stack concepts and MongoDB basics
- **`js_warmup/`** – Standalone JavaScript practice files to build foundational skills before diving into the full MERN stack

---

## Learning Path

For students new to MERN development, we recommend the following learning sequence:

1. **Start with JavaScript Warmup**: Practice with files in `js_warmup/` to strengthen your JavaScript fundamentals
2. **Explore the Documentation**: Review files in `docs/` to understand MERN architecture and MongoDB concepts
3. **Run the MERN App**: Follow the setup instructions above to get the full-stack application running
4. **Experiment and Modify**: Try adding new features, routes, and components to deepen your understanding

---

## Contact

For questions, feedback, or collaboration:

- **LinkedIn**: https://www.linkedin.com/in/nikhil-sk-0a85871aa/
- **Instagram** (for those not on LinkedIn): `nikhil_sk24`

---

## License

This project is intended for educational purposes. Feel free to use it as a learning resource and starting point for your own MERN applications.
