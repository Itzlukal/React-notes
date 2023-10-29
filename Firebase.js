import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDnCik51CinrKObEPqKhCOoVxki2y4Vkek",
  authDomain: "react-notes-e6d6d.firebaseapp.com",
  projectId: "react-notes-e6d6d",
  storageBucket: "react-notes-e6d6d.appspot.com",
  messagingSenderId: "637392726441",
  appId: "1:637392726441:web:3ec00c1f255f19d25bfcb8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')