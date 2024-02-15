// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0u7AGU5xuxB6G1GeQzd8cRabGlvxIOlo",
  authDomain: "my-portfolio-cv-f39a2.firebaseapp.com",
  databaseURL: "https://my-portfolio-cv-f39a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-portfolio-cv-f39a2",
  storageBucket: "my-portfolio-cv-f39a2.appspot.com",
  messagingSenderId: "16012578097",
  appId: "1:16012578097:web:c3e078d8bc35c9c6cd3410",
  measurementId: "G-X2TRERTWTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default app;