
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyC4lnNuY21tqXAob3ZkJmdV15A7McSuDks",
    authDomain: "ecommerce-98194.firebaseapp.com",
    databaseURL: "https://ecommerce-98194-default-rtdb.firebaseio.com",
    projectId: "ecommerce-98194",
    storageBucket: "ecommerce-98194.appspot.com",
    messagingSenderId: "897033013069",
    appId: "1:897033013069:web:d1a52192e57a3f0097d904",
    measurementId: "G-QCPVDMDCGW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);