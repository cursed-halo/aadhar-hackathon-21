// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYbLPHiESd8zXN34Xx8IUy0YnMKulorJM",
  authDomain: "aadhar2web.firebaseapp.com",
  databaseURL: "https://aadhar2web-default-rtdb.firebaseio.com",
  projectId: "aadhar2web",
  storageBucket: "aadhar2web.appspot.com",
  messagingSenderId: "281088834445",
  appId: "1:281088834445:web:b08a0e7376e758d58f9bc4"
};

// Initialize Firebase


import { getFirestore } from "firebase/firestore";
// Initialize Cloud Firestore through Firebase


const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBYbLPHiESd8zXN34Xx8IUy0YnMKulorJM',
  authDomain: "aadhar2web.firebaseapp.com",
  projectId: 'aadhar2web'
});

const db = getFirestore();
import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

