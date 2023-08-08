


function ans1(){
 
    var returnval = true;
      // var email = document.forms['login-form']["mail"].value;
      var email = document.forms['register-form']["mail"].value;
      // alert(email);
      // console.log(1234);
      if (email.length>15){
        // alert(12345);
        alert("Enter email");
        // returnval = false;
        return false;
      }
     console.log(returnval);
      // alert(123456);   
    }
    
    function ans2(){
     
    var returnval = true;
      // var email = document.forms['login-form']["mail"].value;
      var email = document.forms['register-form']["mail"].value;
      // alert(email);
      // console.log(1234);
      if (email.length>15){
        // alert(12345);
        alert("Enter email");
        // returnval = false;
        return false;
      }
     console.log(returnval)
      // alert(123456);
      alert("Form Submitted");
      return returnval;
    
    
    }

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth();
  // // // const analytics = getAnalytics(app);

  // let name = document.getElementById("name");
  // let email = document.getElementById("mail");
  // let pass = document.getElementById("pass");
  // let Apass = document.getElementById("A-pass");

  // window.signup = function(e){
  //   e.preventDefualt();
  //   var obj = {
  //     name:name.value,
  //     email:email.value,
  //     pass:pass.value,
  //     Apass:Apass.value
  //   };
  //   createUserWithEmailAndPassword(auth,obj.email,obj.pass).then(function(success){
  //     alert("Sign up succesfully");
  //   }).catch(function(err){
  //     alert(err);
  //   })

  //   console.log(obj);
  // };

var form = document.getElementById("form1");
  const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            window.open("main.html");
            // ...
        })
        .catch((error) => {
            alert("Wrong Credentials")
        });
    form.reset();
});
    
    