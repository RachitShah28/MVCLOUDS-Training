
    var b;
    var arrayofans = [];
    var ans = document.getElementById("ans");
    function onFileSelected(event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();
      
        var result = document.getElementById("result");
      
        reader.onload = function(event) {
           b = event.target.result;
          // result.innerHTML = event.target.result;
        };
      
        reader.readAsText(selectedFile);
      }
      
      function test(){
        // const fs = require('fs');

        result.innerHTML = b;
        console.log(b);
        /* Read File */
        // fs.readFile('sample.txt', bar)
      }

      function check(){
        arrayofans = b.split(" ");
        console.log(arrayofans);
        var repeated_element = [];

        for(let i = 0; i<arrayofans.length ; i++){
          // console.log(arrayofans[i]);
          for (let j = 0; j < arrayofans[i].length; j++) {
            var already_exists = false;
              // console.log(arrayofans[i][j]);
              for (let k = j+1; k < arrayofans[i].length; k++) {
                  if(arrayofans[i][j] == arrayofans[i][k]){
                    console.log( arrayofans[i][k] ,j,k);
                    var c = arrayofans[i][k];
  
                    var obj = {
                      [arrayofans[i][k]] : [j,k],
                    }
                    repeated_element.push(obj);
                    ans.innerHTML += '<div>' + JSON.stringify(obj) + '</div>'
                    // console.log(obj,'--------------'); 
                    already_exists = true;
                  }
                  
              }
              if(already_exists){
                console.log(11111111111111)
                break;
              }
              
          }
        }


        
      }



     


      

