import firebase from "firebase/app";
import 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCpEiF-hAiJbboIME6KdNBmRc0PlnEKse0",
    authDomain: "otp-generator-809ce.firebaseapp.com",
    projectId: "otp-generator-809ce",
    storageBucket: "otp-generator-809ce.appspot.com",
    messagingSenderId: "247635086257",
    appId: "1:247635086257:web:8a212bd0d1b252e1cf8b90",
    measurementId: "G-CTPKPVBJD2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
