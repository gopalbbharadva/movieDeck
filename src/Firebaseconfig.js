import firebase from "firebase/app";
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCiRnK6knWhXbE88DIYmSnthIX-K62c-k8",
  authDomain: "moviedeck-fc661.firebaseapp.com",
  projectId: "moviedeck-fc661",
  storageBucket: "moviedeck-fc661.appspot.com",
  messagingSenderId: "224418985330",
  appId: "1:224418985330:web:8e840efd4828b9bee599eb",
});
export const auth=app.auth();
export default app;
