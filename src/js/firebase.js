import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPu83vER_TY-YEDr5-k7BCdHY3_V473VU",
  authDomain: "web-app-da822.firebaseapp.com",
  projectId: "web-app-da822",
  storageBucket: "web-app-da822.appspot.com",
  messagingSenderId: "657644836665",
  appId: "1:657644836665:web:ca35fe958f253822913ae8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
  db
}