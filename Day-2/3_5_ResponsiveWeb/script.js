
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC_vfKN9NwhDlGPxQYRF9xKN3ZVnZ3nm5I",
    authDomain: "htmlform-6653e.firebaseapp.com",
    databaseURL: "https://htmlform-6653e-default-rtdb.firebaseio.com",
    projectId: "htmlform-6653e",
    storageBucket: "htmlform-6653e.appspot.com",
    messagingSenderId: "343738130447",
    appId: "1:343738130447:web:301c143205f03c2bf3037a",
    measurementId: "G-V57ECMF6HC"
  };


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementVal("username");
    var password = getElementVal("pass");

    // console.log(name,password);

    saveMessages(name, password);

  }
  const saveMessages = (name, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      password: password,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

//   const app = initializeApp(firebaseConfig);

//   const db = getDatabase(app);


//   document.getElementById('form1').addEventListener('submit', function(e) {
//     e.preventDefault();
//     set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
       
//     });
//     alert('Your form is submitted');
//     document.getElementById('form1').reset();
// });

//   function getInputVal(id){
//     return document.getElementById(id).value;
//   }

//   function saveMessage(name,email){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//       name: name,
//       email:email,
//     });
//   }