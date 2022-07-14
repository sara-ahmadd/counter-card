let counter = document.getElementById("count");
let countBtn = document.querySelector('[name = "count"]');
let countDownBtn = document.querySelector("#count-down");
let saveBtn = document.querySelector('[name = "save"]');
let resetBtn = document.querySelector('[name = "reset"]');

let sum = 0;
counter.innerText = 0;
countBtn.addEventListener("click", () => {
  let num = parseInt(counter.innerText);
  sum = num + 1;
  counter.innerText = sum;
});

countDownBtn.addEventListener("click", () => {
  let num = parseInt(counter.innerText);
  sum = num - 1;
  counter.innerText = sum;
});

saveBtn.addEventListener("click", () => {
  window.localStorage.setItem("count", `${sum}`);
});
resetBtn.addEventListener("click", () => {
  counter.innerText = 0;
});

if (localStorage.getItem("count") !== undefined) {
  counter.innerText = localStorage.getItem("count");
}
