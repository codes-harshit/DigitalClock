
const clock = document.querySelector("#clock");

let date = new Date();
let time = date.toLocaleTimeString();
clock.innerHTML = time;

let updateTime = () => {
    let date = new Date();
    time = date.toLocaleTimeString();
    clock.innerHTML = time;
}

setInterval(updateTime, 1000)
