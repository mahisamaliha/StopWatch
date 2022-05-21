//define vars to hold "time value"

let sec = 0;
let min = 0;
let hour = 0;

//define vars to hold "display value"


let displaySec = 0;
let displayMin = 0;
let displayHour = 0;

let setInterval = null;

let rn = "stopped";

//sw function logic to determine when to imcrement next value

function stopW(){

    sec++;

    if(sec/60 === 1){
        sec = 0;
        min++;

        if(min/60 ===1){
            min = 0;
            hour++;
        }
    }

    if(sec < 10){
        displaySec = "0" + sec.toString();
    }
    else{
        displaySec = sec;
    }

    if(min < 10){
        displayMin = "0" + min.toString();
    }
    else{
        displayMin = min;
    }
    if(hour < 10){
        displayHour = "0" + hour.toString();
    }
    else{
        displayHour = hour;
    }

    document.getElementById("display").innerHTML = displayHour + ":" + displayMin + ":" + displaySec;
     
}


function startStop(){
    if(rn === "stopped"){
        interval = window.setInterval(stopW, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        rn = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        rn = "stopped" ;
    }
}

function reset(){
        window.clearInterval(interval);
        sec = 0;
        min = 0;
        hour = 0;
        document.getElementById("display").innerHTML = "00:00:00";
        document.getElementById("startStop").innerHTML = "Start";
    
}