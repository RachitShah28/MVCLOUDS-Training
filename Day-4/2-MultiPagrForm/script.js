


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
 console.log(returnval)
  // alert(123456);
  return returnval;


}

