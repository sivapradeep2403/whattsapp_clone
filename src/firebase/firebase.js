// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmM2xhSJ4m_CY30wAw8X2AYSeTkRp0odA",
  authDomain: "wpclone1.firebaseapp.com",
  projectId: "wpclone1",
  storageBucket: "wpclone1.appspot.com",
  messagingSenderId: "762669082761",
  appId: "1:762669082761:web:3c7c480f8c6e4c040c7e58",
  measurementId: "G-JNWY2HQN26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore=getFirestore(app);
export default firestore;
