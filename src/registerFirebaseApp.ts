import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const settings = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(settings);
firebase.auth();
firebase.firestore();
firebase.firestore().settings({ timestampsInSnapshots: true });
