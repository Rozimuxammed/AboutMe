import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBgkKF0fincQIZviFKlLpdAmYAA-EdlUXI",
    authDomain: "aboutme-89be4.firebaseapp.com",
    projectId: "aboutme-89be4",
    storageBucket: "aboutme-89be4.appspot.com",
    messagingSenderId: "818289844358",
    appId: "1:818289844358:web:917b50b0c94ac3bd263107",
    measurementId: "G-CGY8MJG9P9"
};

firebase.initializeApp(firebaseConfig)
const Auth = firebase.auth()
export { Auth }