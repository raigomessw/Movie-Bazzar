import 'firebase/compat/firestore';
import  firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';;




const firebaseConfig = {
  apiKey: "AIzaSyBWrQlyG4C9pm4li2WQQLPP9YclhWsiZnM",
  authDomain: "movie-bazzar.firebaseapp.com",
  projectId: "movie-bazzar",
  storageBucket: "movie-bazzar.appspot.com",
  messagingSenderId: "550816010525",
  appId: "1:550816010525:web:cdb2c14e7671d4122cd1f4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default { auth, provider , firebaseApp, db};
