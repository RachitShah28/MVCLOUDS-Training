// console.log("Hi");
// let num = "0230.000";

function removeLeadingTrailing(){
    let num = document.getElementById("num1").value;
    // let temp = Math.trunc(n);
    // console.log(temp);
    //  let c = Math.round(n);
    // console.log(c);
    var ans = num - (num % 1);
    console.log(ans);
    let append1 = document.getElementById("ans5");
    append1.innerHTML = ans;



}
// removeLeadingTrailing(num);

