// console.log("HII");

function ans(){
    let a = String(document.getElementById("str1").value);
    let x = String(document.getElementById("str2").value);


    function Something(a){
        return a + " " + x;
    }
    
    let b = Something(a);
    let finalans = document.getElementById("finalans");
    finalans.innerHTML = b;
    // document.getElementById("ans").innerHTML = b;
    // console.log(typeof(b));
}
