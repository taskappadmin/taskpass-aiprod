# Firebase setup

The repository now includes Firebase Hosting and Firestore deployment configuration.

## Configure the web app

1. Create or select a Firebase project.
2. Register a Web App in Firebase Project Settings.
3. Copy the web app configuration into `firebase-applet-config.json`.
4. Enable the Authentication providers required by the app and create the Firestore database.
5. Update `firebase-applet-config.json` locally; do not commit project-specific credentials unless that is intentional for your deployment workflow.

The checked-in file contains placeholders so the repository remains buildable without exposing a project configuration. The Firebase web API key is not a server secret, but access must still be controlled with Authentication and Firestore Rules.

## Deploy

```bash
npm install
npm run build
npx firebase login
npx firebase use YOUR_FIREBASE_PROJECT_ID
npx firebase deploy --only hosting,firestore:rules
```

Replace `YOUR_FIREBASE_PROJECT_ID` with the project ID configured in Firebase.
