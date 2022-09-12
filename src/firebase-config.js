import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCoXEwslnk5YvM2zhy__lOD6EzxPat45jM",

    authDomain: "school2-b1d17.firebaseapp.com",

    databaseURL: "https://school2-b1d17-default-rtdb.firebaseio.com",

    projectId: "school2-b1d17",

    storageBucket: "school2-b1d17.appspot.com",

    messagingSenderId: "850266516455",

    appId: "1:850266516455:web:f51483f8fc61c9500d6b42"

};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);