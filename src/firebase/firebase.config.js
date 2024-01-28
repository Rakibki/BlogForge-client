// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRaqo0PnAYbrWUN8E11wt7OYtGKz5M6gQ",
  authDomain: "blog-b9d46.firebaseapp.com",
  projectId: "blog-b9d46",
  storageBucket: "blog-b9d46.appspot.com",
  messagingSenderId: "582853242925",
  appId: "1:582853242925:web:6149e996fc865acec548a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;