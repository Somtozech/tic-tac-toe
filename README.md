# Multiplayer Tic-Tac-Toe Workshop

Welcome to the Multiplayer Tic-Tac-Toe Workshop! In this workshop, we will build a real-time multiplayer tic-tac-toe game using Firebase and React

## Overview

This workshop provides step-by-step guidance on building a fully functional multiplayer tic-tac-toe game. Participants will learn how to set up the project, implement the game logic, manage player turns, handle real-time updates using Firebase, and create a user interface

## Prerequisites

- Familiarity with JavaScript and ES6 syntax
- Node.js and npm installed on your machine
- Basic knowledge on setting up a Firebase project


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
- Create a real time database for the project
- Enable Anonymous Sign in in Authentication for the project
- Add an app in the project. Retrieve your Firebase configuration values (apiKey, authDomain, etc.) for the app


4. Set up environment variables:

- Create a .env file in the root directory of the project.

- Add the following environment variables to the .env file:
  
   ```bash 
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

5. Start the development server:
   
   ```bash 
   yarn dev
   ```

## About

This project was created as part of a workshop conducted by me for [Google I/O Extended 2023 Enugu](https://gdg.community.dev/events/details/google-gdg-enugu-presents-google-io-extended-2023-enugu/). Feel free to explore the code and use it as a reference for building your own multiplayer games!

## Images
<img width="1512" alt="image" src="https://github.com/Somtozech/tic-tac-toe/assets/32250849/86b36601-3c88-463b-b323-258e4b3de6d4">
<img width="1512" alt="image" src="https://github.com/Somtozech/tic-tac-toe/assets/32250849/e43858b7-553f-4da1-84bd-86d1c5c2cf7a">
<img width="1512" alt="image" src="https://github.com/Somtozech/tic-tac-toe/assets/32250849/950ec410-03b4-46c8-a32a-e9fdf6f0f7bc">
<img width="1512" alt="image" src="https://github.com/Somtozech/tic-tac-toe/assets/32250849/6c8517f4-559f-41d7-9097-5ccd159dbe4d">
<img width="1512" alt="image" src="https://github.com/Somtozech/tic-tac-toe/assets/32250849/562c8105-724a-4047-8860-a91e260e34f7">
<img width="1512" alt="image" src="https://github.com/Somtozech/tic-tac-toe/assets/32250849/83e092db-bb22-4ea3-87e1-77e209a4b6d3">



