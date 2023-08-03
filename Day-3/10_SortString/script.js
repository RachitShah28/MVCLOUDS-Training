// 65 to 90 A-Z
// 97 to 122

function ans(){
   var str = String(document.getElementById("str").value);
    function sortString(str){
        var arr = str.split('');
        var tmp;
        for(var i = 0; i < arr.length; i++){
          for(var j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
              tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
            }
          }
        }
        return arr.join('');
      }
    
      var ans = String(sortString(str));
      var fianlans = document.getElementById("realans");
      fianlans.innerHTML = ans;
}
