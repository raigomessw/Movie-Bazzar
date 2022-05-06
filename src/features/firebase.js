// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrQlyG4C9pm4li2WQQLPP9YclhWsiZnM",
  authDomain: "movie-bazzar.firebaseapp.com",
  projectId: "movie-bazzar",
  storageBucket: "movie-bazzar.appspot.com",
  messagingSenderId: "550816010525",
  appId: "1:550816010525:web:cdb2c14e7671d4122cd1f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

