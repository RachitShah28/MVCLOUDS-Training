// let a = 16;
// let b = 28;

// function Count(n){
//     var c = 0;
//     while(n>=1){
//         n = n/10;
//         c++;
//     }

//     return c;
// }

function printdata(){
    var a1 =parseInt(document.getElementById("num1").value) ;
    var a2 = parseInt(document.getElementById("num2").value);
    var n = a1+a2;
    console.log(n);
    
    function SingleDigit(n) {
    
        if(n<10){
           return n;
        }
        else{
            console.log(n);
             let myFunc = n => Number(n);
            var intArr = Array.from(String(n), myFunc);
        //    console.log(intArr);
                n = 1;
            for (let i = 0; i < intArr.length; i++) {
                
               n = n * intArr[i];
            }
    
            return SingleDigit(n);
        }
        // while(n>10){
          
        //     let myFunc = num => Number(num);
        //     var intArr = Array.from(String(n), myFunc);
        //     // console.log(intArr);
       
        // }
          
        
    
    }
    let ans = SingleDigit(n);
        let finalans = document.getElementById("ans");
        finalans.innerHTML = ans;
        console.log(ans);
}


