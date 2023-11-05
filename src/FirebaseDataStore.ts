import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0PHN0-NZnE7Lj8mHq7pVupdiU8OcznYc",
    authDomain: "iwa-exemple.firebaseapp.com",
    projectId: "iwa-exemple",
    storageBucket: "iwa-exemple.appspot.com",
    messagingSenderId: "958889540439",
    appId: "1:958889540439:web:099b085ebfcf28cdea5c12"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}