// 14.Write a JavaScript function that accepts a String with space-separated
// numbers and returns the highest and lowest number (as a string).
// Ex. User Input : "1 2 3 4 5"
// Output : "5 1"

// str1 = "12345";
function ans(){
    var str1 = String(document.getElementById("s1").value);
    console.log(str1);

    var answer = document.getElementById("answer");
    
    function addSpace(str2) {
       
        var str = str2.split('').join(' ');
        let myFunc = str => Number(str);
        var intArr = Array.from(String(str), myFunc);
        console.log(intArr);
        let min = Math.min(...intArr);
        let max = Math.max(...intArr);
        answer.innerHTML = min + " " + max;


        console.log(min,max);
      }

      addSpace(str1);
    
      
}

