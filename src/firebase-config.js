import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
// add your config for it to work!
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
