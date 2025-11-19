# Mentor - A E-Learning Platform (Client Side)
An interactive, modern, and user-friendly E-learning platform where users can sign up, enroll in courses, publish their own courses, and access detailed lecture content.
This repository contains the client-side (frontend) of the Mentor platform.
Live Demo: [Live Front end](https://mentor-faf09.web.app/)
Backend Repository: [Backend Code](https://github.com/Tahmied/Mentor-Backend)




# About the Project
Mentor is a complete E-learning platform designed to provide a seamless online learning experience. Users can learn, teach, and manage courses, all through a clean and responsive UI. This repository contains the frontend, built with modern web technologies and designed for scalability and future production-level enhancements



# Features

## User Features

Create an account and sign in

Browse available courses

Enroll into courses

Watch video lectures

Track learning progress

## Instructor Features

Publish new courses

Edit existing courses

Delete courses

Manage course lectures and content

## Application Features

Clean and modern UI

Fully responsive layout

Secure API requests to backend

Firebase-powered authentication & hosting

Smooth navigation and page transitions

# Tech Stack

## Frontend
- React + Vite
- Raw CSS
- Axios
- Firebase Web SDK
- React Router

## Backend
Node.js, Express, MongoDB (see backend repo)
👉 https://github.com/Tahmied/Mentor-Backend

# Installation
Clone the project:

```bash
git clone https://github.com/Tahmied/Mentor.git
cd Mentor
```

Install dependencies:
```bash
npm install
```

# Environment Variables

Create a .env file in the root of the project and add the following:

```bash
VITE_BACKEND=https://mentor.tahmied.com
VITE_SERVER_SECRET=YOUR_SERVER_SECRET_HERE
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

# Usage
Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

# Contributing

Contributions are welcome!
If you want to upgrade the platform, add features, or improve performance/UI, feel free to fork the repo and open a pull request.

Future plans include:

- Payment integration
- Advanced analytics
- Course reviews & ratings
- Admin dashboard
- Certificate generation
- More robust instructor tools