import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// getting firebase obj get from settings of the app
import firebaseConfig from "../firebase";


// initialize
const app = initializeApp(firebaseConfig);


// init services
import {
    getFirestore,
    collection
    
} from "firebase/firestore";
const db = getFirestore();

// int collection refs
const collectionRef = collection(db, "books");

console.log("Firebase");

// get collection data













const analytics = getAnalytics(app);