

 function ans(){
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let mail = document.getElementById("mail");
    let msg = document.getElementById("msg");
    let username = document.getElementById("username");
    let pass = document.getElementById("pass");
    let radio = document.getElementById("G1");

    let btn = document.getElementById("btn");
    const email = mail.value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus(); 
    }
    else{
        name.value = "";
    phone.value = "";
    mail.value = "";
    msg.value = "";
 
    username.value = "";
    pass.value = "";
    radio.checked = "";
     
    alert("Form submmited"); 
    

    }


 
 
 
 
 
 
    
    }




