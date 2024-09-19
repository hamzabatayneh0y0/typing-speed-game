// my version of this game
// let start = document.querySelector(".start");
// let word = document.querySelector(".word");
// let input = document.querySelector(".input");
// let timeLeft = document.querySelector(".time-left .time");
// let score = document.querySelector(".score");
// let seconds = document.querySelector(".seconds");
// let con = document.querySelector(".container");
// let tar = document.querySelector(".target");
// let levl = document.querySelector(".level");
// let inle = document.querySelectorAll("input[type=radio]");
// let cl = document.querySelector(".cl");
// let intervale;
// tar.innerHTML = 0;
// const levels = {
//   easy: 20,
//   normal: 10,
//   hard: 5,
// };
// let def = "normal";
// levl.innerHTML = def;
// seconds.innerHTML = levels[def];

// start.onclick = () => {
//   start.style.display = "none";

//   document.querySelector(".cl").style.display = "flex";
//   cl.onclick = () => {
//     inle.forEach((el) => {
//       if (el.checked === true) {
//         def = el.id;
//         levl.innerHTML = def;
//         seconds.innerHTML = levels[def];
//         document.querySelector(".cl").style.display = "none";

//         word.style.display = "block";
//         input.style.display = "block";
//         load();
//         let wait = setTimeout(() => {
//           alltime();
//         }, 3000);
//         let first = 0;
//         intervale = setInterval(() => {
//           if (!first) {
//             ++tar.innerHTML;
//             word.innerHTML =
//               arrayOfwords[Math.floor(Math.random() * arrayOfwords.length)];
//             creat();
//             first = 1;
//           } else {
//             ++tar.innerHTML;
//             word.innerHTML =
//               document.querySelector(".container .next").innerHTML;
//             con.innerHTML = "";
//             creat();
//           }
//           startgame();
//           TimeLeft();
//         }, 3000);
//       }
//     });
//   };
// };
// let arrayOfwords = [
//   "hello",
//   "programming",
//   "locate",
//   "unanimous",
//   "owner",
//   "negative",
//   "feather",
//   "flatware",
//   "record",
//   "lip",
//   "solo",
//   "engine",
//   "me",
//   "conspiracy",
//   "fire",
//   "slab",
//   "place",
//   "crime",
//   "solid",
//   "treatment",
//   "arrogant",
//   "seal",
//   "bell",
// ];
// function startgame() {
//   input.value = "";
//   input.focus();
//   input.oninput = () => {
//     if (input.value.toLowerCase() === word.innerHTML.toLowerCase()) {
//       input.value = "";
//       score.innerHTML = ++score.innerHTML;
//       console.log(score.innerHTML);
//     }
//   };
// }
// function TimeLeft() {
//   let j = 3;
//   timeLeft.innerHTML = j;

//   let left = setInterval(() => {
//     if (j === 1 || seconds.innerHTML === "0") {
//       if (seconds.innerHTML === "0") timeLeft.innerHTML = "00";
//       clearInterval(left);
//     } else {
//       j--;
//       timeLeft.innerHTML = j;
//     }
//   }, 1000);
// }
// function creat() {
//   let span = document.createElement("span");
//   span.className = "next";
//   let text = document.createTextNode(
//     arrayOfwords[Math.floor(Math.random() * arrayOfwords.length)]
//   );
//   span.appendChild(text);
//   con.appendChild(span);
// }
// function load() {
//   let i = 1;
//   word.innerHTML = i;
//   let load = setInterval(() => {
//     i++;
//     word.innerHTML = i;
//     if (i === 3) {
//       clearInterval(load);
//     }
//   }, 1000);
// }
// function alltime() {
//   let allTime = setInterval(() => {
//     --seconds.innerHTML;
//     if (seconds.innerHTML === "0") {
//       clearInterval(intervale);
//       clearInterval(allTime);
//       word.innerHTML = "";
//       con.innerHTML = "";
//       input.style.display = "none";

//       word.innerHTML = `${score.parentElement.innerHTML}`;
//       score.innerHTML = "";
//       tar.innerHTML = "";
//     }
//   }, 1000);
// }
// input.onpaste = (e) => {
//   return false;
// };

// the real version of this game

let start = document.querySelector(".start");
let word = document.querySelector(".word");
let input = document.querySelector(".input");
let timeLeft = document.querySelector(".time-left .time");
let score = document.querySelector(".score");
let seconds = document.querySelector(".seconds");
let con = document.querySelector(".container");
let tar = document.querySelector(".target");
let levl = document.querySelector(".level");
let inle = document.querySelectorAll("input[type=radio]");
let cl = document.querySelector(".cl");
let counter = 0;
let arrayOfwords = [
  "hello",
  "programming",
  "locate",
  // "unanimous",
  // "owner",
  // "negative",
  // "feather",
  // "flatware",
  // "record",
  // "lip",
  // "solo",
  // "engine",
  // "me",
  // "conspiracy",
  // "fire",
  // "slab",
  // "place",
  // "crime",
  // "solid",
  // "treatment",
  // "arrogant",
  // "seal",
  // "bell",
];
let arrayofrandom = [];
tar.innerHTML = arrayOfwords.length;
const levels = {
  easy: 5,
  normal: 3,
  hard: 2,
};
let def = "normal";
changeL(def);

start.onclick = () => {
  start.style.display = "none";

  document.querySelector(".cl").style.display = "flex";
  cl.onclick = () => {
    inle.forEach((el) => {
      if (el.checked === true) {
        def = el.id;
        changeL(def);

        document.querySelector(".cl").style.display = "none";

        word.style.display = "block";
        input.style.display = "block";
        load();
        let wait = setTimeout(() => {
          word.innerHTML = checkRandom();
          counter++;
          startgame();

          creat();
          let intervale = setInterval(() => {
            timeLeft.innerHTML--;
            if (timeLeft.innerHTML === "0") {
              startgame();
              changeword();
              con.innerHTML = "";
              creat();
              timeLeft.innerHTML = levels[def];
            }
            // endgame();
            if (counter === arrayOfwords.length + 1) {
              clearInterval(intervale);
              timeLeft.innerHTML = "0";
              word.innerHTML = "";
              con.innerHTML = "";
              input.style.display = "none";
              word.innerHTML = `${score.parentElement.innerHTML}`;
              score.innerHTML = "";
              tar.innerHTML = "";
            }
          }, 1000);
        }, 3000);
      }
    });
  };
};

function startgame() {
  input.value = "";
  input.focus();
  input.oninput = () => {
    if (
      input.value.toLowerCase() === word.innerHTML.toLowerCase() &&
      timeLeft.innerHTML !== "0"
    ) {
      input.value = "";
      score.innerHTML = ++score.innerHTML;
    }
  };
}

function creat() {
  let span = document.createElement("span");
  span.className = "next";
  let text = document.createTextNode(checkRandom());
  span.appendChild(text);
  con.appendChild(span);
}
function load() {
  let i = 1;
  word.innerHTML = i;
  let load = setInterval(() => {
    i++;
    word.innerHTML = i;
    if (i === 3) {
      clearInterval(load);
    }
  }, 1000);
}

function changeL(def) {
  levl.innerHTML = def;
  seconds.innerHTML = levels[def];
  timeLeft.innerHTML = levels[def];
}
function checkRandom() {
  let good = 1;
  let randomWord;
  if (arrayofrandom.length === arrayOfwords.length) return "the end";
  else {
    while (good && arrayofrandom.length !== arrayOfwords.length) {
      randomWord =
        arrayOfwords[Math.floor(Math.random() * arrayOfwords.length)];
      good = arrayofrandom.includes(randomWord);
    }
    if (!good) {
      arrayofrandom.push(randomWord);
    }
    return randomWord;
  }
}

function changeword() {
  word.innerHTML = document.querySelector(".container .next").innerHTML;
  counter++;
}
input.onpaste = (e) => {
  return false;
};
let y = 0;
// let k = setInterval(() => {
//   if (y === 5) clearInterval(k);

//   console.log(y);
//   y++;
// }, 1000);
