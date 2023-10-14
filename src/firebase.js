// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFXikwhpZsaq4qbBZQulTKlpP8GaFnyVs",
  authDomain: "tiafae.firebaseapp.com",
  projectId: "tiafae",
  storageBucket: "tiafae.appspot.com",
  messagingSenderId: "879455480635",
  appId: "1:879455480635:web:8c04a622f6b88aa017e51e",
  measurementId: "G-RGVFKSBTYZ",
  databaseURL: "https://tiafae-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database }