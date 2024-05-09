let [ms, s, min, h] = [0, 0, 0, 0];
let which = "stop";

let start = document.getElementById("start");
let inp = document.getElementById("input");
let hour = document.querySelector(".hr");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");

console.log(hour.value);
console.log(minute.value);
console.log(second.value);
let dt = null;

start.addEventListener('click', startFunc);

function startFunc(){
    handle();
    h = hour.value;
    min = minute.value;
    s = second.value;
    if(dt !== null){
        clearInterval(dt);
    }
    dt = setInterval(function(){
        dec(Number(h), Number(min), Number(s));
    }, 1000);
}

function handle(){
    h = Number(hour.value);
    min = Number(minute.value);
    s = Number(second.value);
    if(s > 60){
        second.value = 60;
        if(min > 60){
            minute.value = 60;
        }
    }else if(min > 60){
        minute.value = 60;
    }
}


function dec(hrs,mins,secs){
    if(secs > 0){
        secs -= 1;
    }else if(mins>0){
        secs = 59;
        mins -= 1;
    }else if(hrs>0){
        secs = 59;
        mins = 59;
        hrs -= 1;
    }
    hrs = (hrs>9)?hrs:'0'+hrs;
    mins = (mins>9)?mins:'0'+mins;
    secs = (secs>9)?secs:'0'+secs;
    inp.innerText = `${hrs} : ${mins} : ${secs}`;
    h = Number(hrs);
    min = Number(mins);
    s = Number(secs);
}