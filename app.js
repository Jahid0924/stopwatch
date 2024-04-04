let [mint, sec, msec] = [0, 0, 0];
let timer = null;
let startbtn = document.querySelector(".start");
let pausebtn = document.querySelector(".stop");
let resetbtn = document.querySelector(".reset");
let displaytime = document.querySelector(".display");
let box = document.querySelector(".watchbox");
let time = document.querySelector("h1");
let startFrame = document.querySelector(".start i");
let pauseFrame = document.querySelector(".stop i");
let svgicon = document.querySelector(".svgIcon")
let mode = 'visible';
let Blinking;
let raotation;

let display = "hidden";

function counting() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      mint++;
    }
  }

  let m = mint < 10 ? "0" + mint : mint;
  let s = sec < 10 ? "0" + sec : sec;
  let ms = msec < 10 ? "0" + msec : msec;
  displaytime.innerHTML = m + ":" + s + ":" + ms;
}

function StartWatch() {
  timer = setInterval(counting, 100);
  displaytime.classList.remove("blink");
  clearInterval(Blinking);
  startFrame.classList.add("transitions");
  startFrame.style.transform = "rotate(360deg)";
  setTimeout(() => {
    startbtn.classList.add("hide");
    pausebtn.classList.remove("hide");
    pauseFrame.classList.add("transitions");
  }, 500);
  
}
function StopWatch() {
  clearInterval(timer);
  if(displaytime.innerHTML == "00:00:00"){
    clearInterval(Blinking)
  }
  else{

 
  Blinking = setInterval(() => {
    if (mode === "visible") {
      mode = "invisible";
      displaytime.classList.add("blink");
      displaytime.classList.remove("display");
    } else {
      mode = "visible";
      displaytime.classList.add("display");
      displaytime.classList.remove("blink");
      
    }
  }, 400);
}
pauseFrame.style.transform = "rotate(360deg)";
setTimeout(() => {
  startbtn.classList.remove("hide");
  pausebtn.classList.add("hide");
  startFrame.classList.add("transitions");
}, 500);

}
function Reset() {
  clearInterval(timer);
  [mint, sec, msec] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00";
  clearInterval(Blinking);
  svgicon.classList.toggle("resetrotate");
  time.classList.remove("blink");
  displaytime.classList.remove("blink");
  startbtn.classList.remove("hide");
  pausebtn.classList.add("hide");
}




