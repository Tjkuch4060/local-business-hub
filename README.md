# Local Business Hub 🏪

> Your AI-Powered Front Desk: Manages Bookings, Clients, and Marketing—So You Can Do the Real Work.

A comprehensive, all-in-one platform designed for local service businesses. This application is a dynamic, single-page web app built with vanilla JavaScript and powered by a Firebase backend. It includes a booking system, customer relationship management (CRM), and AI-powered marketing tools using the Gemini API.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Tjkuch4060/local-business-hub)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Tjkuch4060/local-business-hub)


## ✨ Features

- Single-Page Application: Fast and responsive user experience with no page reloads.
- Real-time Database: All data is powered by Firebase's Firestore, ensuring your data is always live and up-to-date.
- AI-Powered Assistant (Gemini API):
  - Automatically generate marketing slogans.
  - Create social media posts for your services.
  - Draft marketing emails to your customers.
  - Generate compelling service descriptions.
- Booking System: Manage your services and view appointments on a calendar.
- Customer Management (CRM): Keep a database of all your customers.
- Website Builder: Manage your public-facing business profile.
- Dark/Light Mode: User-selectable theme that is saved locally.
- UI/UX Polish: Includes toast notifications, empty states, and enhanced form validation.

## 🚀 Getting Started

This project is a single `index.html` file that contains all the necessary HTML, CSS, and JavaScript.

### Prerequisites
- A modern web browser.
- A Firebase project for the backend.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Tjkuch4060/local-business-hub.git
   cd local-business-hub
   ```
2. Open `index.html`: Simply open the `index.html` file in your web browser. The app uses Firebase for anonymous authentication, so it will work out-of-the-box with demo data.

### Firebase Setup (for your own backend)
To connect the app to your own Firebase project, you'll need to provide your Firebase configuration. The application looks for global JavaScript variables to configure itself.

1. Create a Firebase Project: Go to the Firebase Console and create a new project.
2. Set up Firestore: In your new project, go to the "Firestore Database" section and create a database.
3. Get Config: In your project settings, find your Firebase SDK configuration snippet.
4. Set Global Variables: You'll need to inject the following variables into the environment where you host the `index.html` file:
   - `__firebase_config`: A JSON string of your Firebase config object.
   - `__app_id`: A unique ID for your application instance (e.g., `"my-business-hub"`).
   - `__initial_auth_token`: (Optional) A custom Firebase auth token if you are integrating with an existing user system.

If these variables are not present, the app will fall back to a demo mode using placeholder credentials.

## 🌍 Deployment

You can deploy this single `index.html` file to any static hosting provider.

- Vercel: Click the "Deploy with Vercel" button above.
- Netlify: Click the "Deploy to Netlify" button above.

For both platforms, you will need to configure environment variables to inject your Firebase configuration into the `index.html` file.

## 📁 Project Structure

```
local-business-hub/
├── index.html              # Main (and only) application file
├── firestore.rules         # Security rules for your Firestore database
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── package.json            # Project metadata
├── vercel.json             # Vercel configuration
├── netlify.toml            # Netlify configuration
└── README.md               # This file
```
