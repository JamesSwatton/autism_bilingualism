// import { db } from '$lib/firebase/firebase.js'

import "firebase/firestore";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { collection, doc, addDoc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvPihCj54RrkKu5AU7zGXxeKSb9QeKud8",
  authDomain: "form-test-81c87.firebaseapp.com",
  databaseURL: "https://form-test-81c87-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "form-test-81c87",
  storageBucket: "form-test-81c87.appspot.com",
  messagingSenderId: "806947003248",
  appId: "1:806947003248:web:9a471f1fc46f0a299a4db5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export const actions = {
    create: async ({request}) => {
        const formData = await request.formData();

        const docData = Object.fromEntries(formData)
        console.log(docData)

        const docRef = doc(db, "forms", docData.email)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docData.subscribe)
            console.log('document already exists!')
            await setDoc(doc(db, "forms", docData.email), docData);
            console.log('previous doc has been overwritten!')
        } else {
            await setDoc(doc(db, "forms", docData.email), docData);
            console.log('document has been written')
        }
    }
}