console.log("Hii");
// let a = document.getElementById("num1").value;
// let b = document.getElementById("num2").value;
// console.log(a,b);
function shift1(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = Math.pow(2,b);
    // console.log(c);

    let ans = Math.floor(a/c);
    // console.log(ans);

    let print1 = document.getElementById("ans");
    print1.innerHTML = ans;
}

// shift1(80,3);