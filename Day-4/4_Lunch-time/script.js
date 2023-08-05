
function print() {
    var CH = parseInt(document.getElementById("hrs").value);
    var CM = parseInt(document.getElementById("min").value);
    var BH = 13;
    var BM = 0;
    total_min = CH*60 + CM;
    to_go_min = BH*60 + BM;
    let difference = to_go_min - total_min;
    let final_hr = Math.floor(difference/60);
    let final_min = Math.floor(difference%60);
    

    if(CH>13){
        document.getElementById("ans    ").innerHTML = "Lunch is Over";
    }
    else{
        document.getElementById("ans").innerHTML = final_hr + "hr"+" "+final_min+"min remaining!";

    } 
}