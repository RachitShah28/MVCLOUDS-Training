

function Count(n){
    var c = 0;
    while(n>=1){
        n = n/10;
        c++;
    }

    return c;
}



let d = document.getElementById("ans1");
d.innerText = Count(1000);

let e = document.getElementById("ans2");
e.innerText = Count(12);