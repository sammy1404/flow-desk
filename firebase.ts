// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqtA2uOOOno6kii9UULHJ-Ba37ND4DkwE",
  authDomain: "flowdesk-c7d8c.firebaseapp.com",
  projectId: "flowdesk-c7d8c",
  storageBucket: "flowdesk-c7d8c.firebasestorage.app",
  messagingSenderId: "704974496312",
  appId: "1:704974496312:web:e7565652a11d0ed2f47ccd"
};


const app = getApps.length === 0?  initializeApp(firebaseConfig): getApp();
const db = getFirestore(app)

export {db}