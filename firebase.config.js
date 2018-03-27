const FIREBASE_PROJECT = process.env.npm_config_firebase_project;
const FIREBASE_API_KEY = process.env.npm_config_firebase_api_key;
const FIREBASE_ID = process.env.npm_config_firebase_id;

export default {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_PROJECT}.firebaseio.com`,
  projectId: FIREBASE_PROJECT,
  storageBucket: `${FIREBASE_PROJECT}.appspot.com`,
  messagingSenderId: FIREBASE_ID
};