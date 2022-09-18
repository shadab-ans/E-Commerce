// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgeCToLAdsthQ-BGUJzDEanWfJ1itThlo",
    authDomain: "shopper-square-2.firebaseapp.com",
    projectId: "shopper-square-2",
    storageBucket: "shopper-square-2.appspot.com",
    messagingSenderId: "752366626629",
    appId: "1:752366626629:web:b9528b9853d44e4ac8002c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);