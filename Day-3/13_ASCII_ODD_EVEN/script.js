// console.log("Hii");

function ans() {
    // let n ="THE LITTLE MERMAID";
    let n = String(document.getElementById("str1").value);
var ans = [];

console.log(n);
for (let i = 0; i < n.length; i++) {
    
    if(n.charCodeAt(i) % 2 === 0){
        ans.push(n.charAt(i).toUpperCase());
         
        // console.log(n.charCodeAt(i));
    }
    else{
        ans.push(n.charAt(i).toLowerCase());
        
    }
}

var finalans = ans.join("");
let finalans2 = document.getElementById("finalans");
finalans2.innerHTML = finalans;
console.log(finalans);
}

