// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEfv5tRzSaUsoPSoK-exwnwDx_8ioTrlA",
  authDomain: "my-foodi-app.firebaseapp.com",
  projectId: "my-foodi-app",
  storageBucket: "my-foodi-app.appspot.com",
  messagingSenderId: "785304217794",
  appId: "1:785304217794:web:b8cf4255fd390dfb39f35b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
