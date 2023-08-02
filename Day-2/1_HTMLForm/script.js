let mail = document.getElementById("mail");
// let a =document.getElementsByClassName("a");

var x = document.forms["myForm"]["Yname"].value;
function ans(){
    
    
    const email = mail.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus(); 
        }
        else{
          
         
        alert("Form submmited"); 
        
    
        }

        // if (x == "" || x == null) {
        //     // alert("Name must be filled out");
        //     return false;
        //   }
}
