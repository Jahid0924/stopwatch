// let [sec, hrs, mint] = [0, 0, 0];
// let display = document.querySelector(".watch");
// let timmer = null;
// function cahnge() {
//   let sel = document.querySelector("#userdata");
//   let selectValue = sel.Value;
//   let parse = parseInt(selectValue);
//   let span = document.querySelector(".txt");
//   span.innerHTML = parse;
// }

// function time() {
//   sec++;
//   if (sec == 60) {
//     sec = 0;
//     mint++;
//     if (mint == 60) {
//       mint = 0;
//       hrs++;
//     }
//   }
//   let h = hrs < 10 ? "0" + hrs : hrs;
//   let m = mint < 10 ? "0" + mint : mint;
//   let s = sec < 10 ? "0" + sec : sec;
//   display.innerHTML = h + ":" + m + ":" + s;
// }

// function watch() {
//   if (timmer !== null) {
//     clearInterval(timmer);
//   }
//   timmer = setInterval(time, 999.9);
// }
// function stopwatch() {
//   clearInterval(timmer);
// }
// function reset() {
//   clearInterval(timmer);
//   [sec, hrs, mint] = [0, 0, 0];
//   display.innerHTML = "00" + ":" + "00" + ":" + "00";
// }

let [mint, sec, msec] = [0, 0, 0];
let timer = null;
let startbtn = document.querySelector(".start");
let pausebtn = document.querySelector(".stop");
let displaytime = document.querySelector(".display");

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
  // if (display === "hidden") {
  //   display = "shown";
  //   startbtn.classList.add("hide");
  //   pausebtn.classList.remove("hide");
  // } else {
  //   display = "hidden";
  //   startbtn.classList.remove("hide");
  //   pausebtn.classList.add("hide");
  // }

  timer = setInterval(counting, 100);
}
function StopWatch() {
  clearInterval(timer);
}
function Reset() {
  clearInterval(timer);
  [mint, sec, msec] = [0, 0, 0];
  displaytime.innerHTML = "00:00:00";
}
