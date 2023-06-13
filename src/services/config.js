import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe1li7x8NFp5Sc3c-e1CilZk5ouZlhc54",
  authDomain: "tiendaonline-7a669.firebaseapp.com",
  projectId: "tiendaonline-7a669",
  storageBucket: "tiendaonline-7a669.appspot.com",
  messagingSenderId: "924521085893",
  appId: "1:924521085893:web:58ef417f9b26954e3329ac"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);