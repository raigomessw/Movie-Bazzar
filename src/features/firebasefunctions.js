
import { firestore } from "firebase";

import firebase from 'firebase/app';

import db from "./firebaseConfig";

export const saveComm = async(data) => {

//await setDoc(doc(firestore , "comments" ,`${Date.now()}`), data, {merge : true})



//const res = await db.collection("comments").doc(`${Date.now()}`).set(data);



db.collection("comments").doc(`${Date.now()}`).set(data)

.then(() => {

console.log("Document successfully written!");

})

.catch((error) => {

console.error("Error writing document: ", error);

});


}





// export const fetchcomments = async(film) => {




// db.collection("comments").where("filmId", "==", film)

// .onSnapshot((querySnapshot) => {

// var filmcoms = [];

// querySnapshot.forEach((doc) => {

// console.log("doc is " , doc)

// filmcoms.push(doc.data());

// });

// console.log("List of comments ", filmcoms );

// return filmcoms

// });



// }
