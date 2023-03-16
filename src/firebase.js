// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
        apiKey: 'AIzaSyCJ5Cp6kVKV4q08IuFYk8D9M7J7KN6bO-Y',
         authDomain: "hestia-73c85.firebaseapp.com",
        projectId: 'hestia-73c85',
        storageBucket:  'hestia-73c85.appspot.com',
        messagingSenderId: "662574977698",
        appId: "1:662574977698:web:9d8de00e9f1a7a5a823dfb",
        measurementId: "G-EY3FGFZSX4" 
}
// REACT_APP_FIREBASE_APIKEY: 'IzaSyDNbfqE8F9d6pJCrwWQrMi9QX7hOLn8e18',
//   REACT_APP_FIREBASE_AUTHDOMAIN : 'hestia-73c85.firebaseapp.com',
//   REACT_APP_FIREBASE_DBURL :  'https://hestia-73c85-default-rtdb.asia-southeast1.firebasedatabase.app',
//   REACT_APP_FIREBASE_PROJECTID  :  'hestia-73c85',
//   REACT_APP_FIREBASE_STORAGEBUCKET :  'hestia-73c85.appspot.com',
//   REACT_APP_FIREBASE_MESSAGINGSENDERID : '662574977698',
//   REACT_APP_FIREBASE_APPID: '1:662574977698:web:9d8de00e9f1a7a5a823dfb',
//   EACT_APP_FIREBASE_MEASUREMENTID : 'G-EY3FGFZSX4'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export {db};
export default app;
export {auth}