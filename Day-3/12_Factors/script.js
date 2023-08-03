// console.log("Hii");

function ans9(){

    let n = parseInt(document.getElementById("num1").value);
    let AnsArray = [];
    function factors(n){
        for (let i = 1; i <= n; i++) {
            if(n%i == 0){
                AnsArray.push(i);
            }
        }
    
        // console.log(AnsArray);
        let arrayprint = document.getElementById("arrayprint");
        arrayprint.innerHTML = AnsArray;
    }
    
    factors(n);
}
