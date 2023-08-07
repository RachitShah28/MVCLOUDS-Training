// import 'firebase/storage';
// import { getStorage, ref, listAll } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC4lnNuY21tqXAob3ZkJmdV15A7McSuDks",
    authDomain: "ecommerce-98194.firebaseapp.com",
    databaseURL: "https://ecommerce-98194-default-rtdb.firebaseio.com",
    projectId: "ecommerce-98194",
    storageBucket: "ecommerce-98194.appspot.com",
    messagingSenderId: "897033013069",
    appId: "1:897033013069:web:d1a52192e57a3f0097d904",
    measurementId: "G-QCPVDMDCGW"
  };
  firebase.initializeApp(firebaseConfig);

  var storageRef = firebase.storage().ref();
//   console.log(root.child('images').listAll());
//   var spaceRef = storageRef.child('images/mvcloud.png');
  var spaceRef = storageRef.child('images/mvcloud.png');
  storageRef.child('images/mvcloud.png').getDownloadURL().then(function(url) {
      var test = url;   
    //   alert(url);
      document.querySelector('img').src = test;

  }).catch(function(error) {

  });

//   var test = 'firebase_url';

// document.querySelector('img').src = test;
       