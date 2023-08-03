console.log("Testing");
let var2 = document.getElementById("ans1");
function getvalue(){
    const val = document.querySelector('input').value;
    console.log(val);

    var rev=val.split("").reverse().join("");
    console.log(rev);

    if(rev > val){
      var2.innerHTML = "True";
    }

    else if(rev == val){
        var2.innerHTML = "Same";
    }
    else{
        var2.innerHTML = "False";
    }
}



