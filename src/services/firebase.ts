import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdpJrI2ycFMwrXc-w5_HjkNNlEpV8TQyc",
  authDomain: "netflix-clone-project-396ae.firebaseapp.com",
  projectId: "netflix-clone-project-396ae",
  storageBucket: "netflix-clone-project-396ae.appspot.com",
  messagingSenderId: "196768865749",
  appId: "1:196768865749:web:3e406466dd7f7e8c47f15c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
