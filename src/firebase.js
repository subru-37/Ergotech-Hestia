// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
        apiKey: "AIzaSyCJ5Cp6kVKV4q08IuFYk8D9M7J7KN6bO-Y",
         authDomain: "hestia---ergotech.firebaseapp.com",
        projectId: "hestia---ergotech",
        storageBucket: "hestia---ergotech.appspot.com",
        messagingSenderId: "311486461166",
        appId: "1:311486461166:web:3e319019bf25777cc62fff",
        measurementId: "G-GWXYQS1RWG" 
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export {db};
export default app;
export {auth}