// const fs = require("fs");

// fs.readFile("sample.txt", (err, data) => {
//     if (err) throw err;
  
//     console.log(data.toString());
//   });

var a = document.getElementById("inputFileToRead");
      // console.log("hii");
      var string;
      // console.log("hii");
      a.addEventListener("change", function () {
          console.log("Hii");
          var fr = new FileReader();
          fr.readAsText(this.files[0]);
          fr.onload = function () {
        //   console.log(fr.result);
          string = (fr.result).toString();
          console.log(string);

          function abc(string) {
            for(var i = 0; i <= string.length; i++) {
                for(var j = i+1; j <= string.length; j++) {
                    if(string[j] == string[i]) {

                        var obj = {
                             i : i + ":" + j
                        }
                        console.log(obj);
                        // return obj;
                    }
                }
            }
            return true;
        }

        abc(string);
    
          };  
          // console.log(string);
      });



    // function onFileSelected(event) {
    //     var selectedFile = event.target.files[0];
    //     var reader = new FileReader();
      
    //     var result = document.getElementById("result");
      
    //     reader.onload = function(event) {
    //       result.innerHTML = event.target.result;
    //     };
      
    //     reader.readAsText(selectedFile);
    //   }
      



     


      

