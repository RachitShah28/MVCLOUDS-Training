
function ans(){
  var n = Number(document.getElementById("table").value);
  function addNumbers(n) {
    var result = "";

    for(var i = 1; i<= 10; i++){
      result = result + "<p>"+ n + "*" + i + "=" + n * i +"</p>";
    }

    document.getElementById("result").innerHTML = result;
  }

  addNumbers(n);
}
