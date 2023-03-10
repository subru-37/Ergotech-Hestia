// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
        apiKey: "AIzaSyDNbfqE8F9d6pJCrwWQrMi9QX7hOLn8e18",
        authDomain: "hestia-73c85.firebaseapp.com",
        databaseURL: "https://hestia-73c85-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "hestia-73c85",
        storageBucket: "hestia-73c85.appspot.com",
        messagingSenderId: "662574977698",
        appId: "1:662574977698:web:9d8de00e9f1a7a5a823dfb",
        measurementId: "G-EY3FGFZSX4"
}

// Initialize Firebase
//const db = firebase.realtimeDatabase();
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
export {db};
export default app;
export {auth}