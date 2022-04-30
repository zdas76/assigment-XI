// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKYeUAHE6T9OINDX-UEm0K4gXujiMk-ws",
    authDomain: "best-furniture-gallery.firebaseapp.com",
    projectId: "best-furniture-gallery",
    storageBucket: "best-furniture-gallery.appspot.com",
    messagingSenderId: "240443261748",
    appId: "1:240443261748:web:8a70b717b83172215d9b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;