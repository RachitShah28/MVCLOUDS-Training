// console.log("Hi");

function printdetails(val){
    var v = document.getElementById("num1");
     v.value += val;
}

function result(){
    var p = document.getElementById("num1").value;
    var q = eval(p);
    document.getElementById("num1").value = q;
}

function clear2(){
     var clr = document.getElementById("num1");
     console.log(123);
    clr.value = '';
    
}

function back (){
    var txt = document.getElementById("num1").value;
    txt = txt.slice(0,-1);
    document.getElementById("num1").value = txt;
}