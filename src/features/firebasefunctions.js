import firebase from "firebase/compat/app";
import db from "./firebaseConfig";
// import { getAuth, signInAnonymously } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, linkWithCredential } from "firebase/auth";


const saveComm = async (data) => {
  //await setDoc(doc(firestore , "comments" ,`${Date.now()}`), data, {merge : true})

  //const res = await  db.collection("comments").doc(`${Date.now()}`).set(data);

  // const credential = GoogleAuthProvider.credential(
  // googleUser.getAuthResponse().id_token);
  // const auth = getAuth();
  // linkWithCredential(auth.currentUser, credential)
  // .then((usercred) => {
  //   const user = usercred.user;
  //   console.log("Anonymous account successfully upgraded", user);
  // }).catch((error) => {
  //   console.log("Error upgrading anonymous account", error);
  // });

  /*const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });*/


  db.collection("comments")
    .doc(`${Date.now()}`)
    .set(data)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

};
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     auth.uid.signInAnonymously === true
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//   } else {
//     auth.signInAnonymously === false
//     // User is signed out
// }
export default saveComm;

// export const fetchcomments = async(film) => {

//     db.collection("comments").where("filmId", "==", film)
//     .onSnapshot((querySnapshot) => {
//         var filmcoms = [];
//         querySnapshot.forEach((doc) => {
//             console.log("doc is " , doc)
//             filmcoms.push(doc.data());
//         });
//         console.log("List of  comments ", filmcoms );
//         return filmcoms
//     });

//     }
