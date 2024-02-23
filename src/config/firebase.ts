import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrzPxnbEp3BM73a3oJM8qxbBEUopd-WFs",
  authDomain: "dn-group-15e39.firebaseapp.com",
  projectId: "dn-group-15e39",
  storageBucket: "dn-group-15e39.appspot.com",
  messagingSenderId: "447687022745",
  appId: "1:447687022745:web:af210c768f103e5a050008"
};

export const APP = initializeApp(firebaseConfig);
export const DATABASE = getDatabase()
