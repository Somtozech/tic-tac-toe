# Multiplayer Tic-Tac-Toe Workshop

Welcome to the Multiplayer Tic-Tac-Toe Workshop! In this workshop, we will build a real-time multiplayer tic-tac-toe game using Firebase and React

## Overview

This workshop provides step-by-step guidance on building a fully functional multiplayer tic-tac-toe game. Participants will learn how to set up the project, implement the game logic, manage player turns, handle real-time updates using Firebase, and create a user interface

## Prerequisites

- Basic understanding of React.js
- Familiarity with JavaScript and ES6 syntax
- Node.js and npm installed on your machine
- Basic knowlegdge on setting up a firebase project


## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Somtozech/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. Install dependencies:

   ```bash 
   yarn install
   ```

3. Create a Firebase project:

- Go to the [Firebase Console](https://console.firebase.google.com/u/0/) and create a new project.
- Add an app in the project. Retrieve your Firebase configuration values (apiKey, authDomain, etc.) for the app
- Create a real time database for the project
- Enable Anonymous Sign in in Authentication for the project

4. Set up environment variables:

- Create a .env file in the root directory of the project.

- Add the following environment variables to the .env file:
  
   ```bash 
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_DATABASE_URL=your_database_url
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

1. Start the development server:
   
   ```bash 
   yarn dev
   ```