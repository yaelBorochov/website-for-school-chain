import {
  getFirestore
} from "firebase/firestore";
import 'firebase/firestore'
import {getStorage} from 'firebase/storage';
import "@firebase/auth"
import { initializeApp } from "@firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //const app = firebase.initializeApp({
  apiKey: "AIzaSyBH4W0RP2fHbx5ggNssNFA0iS4Yqz0dohM",
  authDomain: "chinuch-veatid.firebaseapp.com",
  projectId: "chinuch-veatid",
  storageBucket: "chinuch-veatid.appspot.com",
  messagingSenderId: "310423515438",
  appId: "1:310423515438:web:f5bf693cac7c34fd73cabf",
  measurementId: "G-MTF0W0FNTD"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics =  firebase.getAnalytics(app);
//const analytics =  getAnalytics(app);
//export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firestore = getFirestore();

// const speciaLOfTheDay = doc(firestore, 'dailySpecial/2022-08-5')
// function writeDailySpecial() {
//   const docData = {
//     description: 'A delicious vanilla late',
//     price: 3.99,
//     milk: 'Whole',
//     vegan: false,
//   };
//   setDoc(speciaLOfTheDay, docData, { merge: true });
//   ThemeConsumer(() => {
//     console.log('This valu has been written to the database');
//   })
//     .catch((error) => {
//       console.log('I got an error! ${error}');
//     });
// }

// const ordersCollection = collection(firestore, 'orders');

// async function addNewDocument() {
//   const newDoc = await addDoc(ordersCollection, {
//     customer: 'Arthur',
//     drink: 'latte',
//   });
//   console.log('your doc was created at ${newDoc.path}');
// }

// async function readSingleDocument() {
//   const mySnapshot = await getDoc(speciaLOfTheDay);
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     console.log('My data is ${JSON.stringify(docData)}');
//   }
// }

// let dailSpecialUnsubscribe;

// function listenToADocument() {
//   dailSpecialUnsubscribe = onSnapshot(speciaLOfTheDay, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docData = docSnapshot.data();
//       console.log('In realtime, docData is ${JSON.stringify(docData)}');
//     }
//   });
// }

// function cancelMyListenerAtTheAppropriateTime() {
//   dailSpecialUnsubscribe();
// }

// function queryForDocuments() {
//   const customerOrdersQuery = query(
//     collection(firestore, 'orders'),
//     where('drink', '==', 'latte'),
//     orderBy('price'),
//     limit(10),
//   );

//   //const querySnapshot = await getDocs(customerOrdersQuery);
//   onSnapshot(customerOrdersQuery,(querySnapshot)=>{
//     querySnapshot.forEach((snap) => {
//       console.log(
//         'Ducument ${snap.id} contains ${JSON.stringify(snap.data())}')
//     });
//   })
// }


// console.log('hellow there, FireBase!');
// writeDailySpecial();
// addNewDocument();
// readSingleDocument();
// listenToADocument();
// queryForDocuments();


const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = getStorage(app);
// const storageRef = firebase.storage().ref();
 export { auth, provider,firestore, storage };

 //const colRef = collection(db, 'student');
 //const q = query(colRef, where('ID', '==', auth.currentUser));
//  getDocs(q).then((snap) => {
//      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
//      console.log(data);
//      return data;
//  });


//console.log('hellow there, FireBase!');
//writeDailySpecial();
//addNewDocument();
//readSingleDocument();
//listenToADocument();
//queryForDocuments();


//maybe:
 //export const auth = getAuth();
 //export const storage = getStorage();
export default app





// import firebase from "firebase/app"
// import "firebase/compat/auth"
// import { initializeApp } from "firebase/firebase-app";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBH4W0RP2fHbx5ggNssNFA0iS4Yqz0dohM",
//   authDomain: "chinuch-veatid.firebaseapp.com",
//   projectId: "chinuch-veatid",
//   storageBucket: "chinuch-veatid.appspot.com",
//   messagingSenderId: "310423515438",
//   appId: "1:310423515438:web:f5bf693cac7c34fd73cabf",
//   measurementId: "G-MTF0W0FNTD"
// })

// export const auth = app.auth()
// export default app
