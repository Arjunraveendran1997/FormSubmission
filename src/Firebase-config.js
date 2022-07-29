import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDXIFOq3n-olloKf8_DBot_IC3q_HsqYmU",
    authDomain: "olx-project-e700c.firebaseapp.com",
    projectId: "olx-project-e700c",
    storageBucket: "olx-project-e700c.appspot.com",
    messagingSenderId: "93463311187",
    appId: "1:93463311187:web:30d7e2df924e40259427a6",
    measurementId: "G-28F3NQ4LLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
