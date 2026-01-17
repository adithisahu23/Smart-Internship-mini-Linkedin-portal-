# Smart Internship / Job Portal (Mini LinkedIn)

A full-stack MERN application where students can apply for internships
and recruiters can post jobs with role-based authentication.

## Tech Stack
- React
- Node.js
- Express
- MongoDB
- JWT Authentication

## Features
- Student & Recruiter login
- Job posting
- Job application
- Secure authentication

## How to Run
1. Start MongoDB
2. cd backend → npm install → npm start
3. cd frontend → npm install → npm run dev
internship-job-portal/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   └── applicationRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Jobs.jsx
│   │   │   └── PostJob.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│
├── README.md
React UI → Express API → MongoDB
        → JWT Auth Middleware
internship-portal/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   └── applicationRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── config/db.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Jobs.jsx
│   │   │   └── PostJob.jsx
│   │   ├── components/
│   │   ├── App.js
│   │   └── main.jsx
│
└── README.md
🏗️ Tech Stack (Industry-Relevant)

Frontend: React + Tailwind CSS

Backend: Node.js + Express

Database: MongoDB

Auth: JWT (Role-based: Student / Recruiter)

Tools: Git, Postman
