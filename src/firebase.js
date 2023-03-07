// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
require("firebase/auth")

const app = firebase.initializeApp({
        apiKey: process.env.REAct_APP_FIREBASE_APIKEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_FIREBASE_APPID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
})

// Initialize Firebase
export const auth = app.auth()
export default app