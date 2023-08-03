



function Check(str){
    if(str.includes("ee")){
        return true;
    }

    return false;
}

// console.log(Check("ABCEdee"));
let ans = document.getElementById("mul");
ans.innerText = Check("ABCEdee");