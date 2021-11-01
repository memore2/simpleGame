const playBtn = document.querySelector(".collection__playBtn");
const startBtn = playBtn.querySelector("i");
const timeCheck = document.querySelector(".collection__time span");
const counted = document.querySelector(".collection__count span");
let count = 10;
let carrot = 10;
let timer;
const handelPlay = () => {
  if (startBtn.className === "fas fa-play") {
    const collection = document.createElement("section");
    const reset = document.querySelector(".character");
    count = 10;
    collection.setAttribute("class", "character");
    reset && reset.remove();
    startBtn.className = "fas fa-stop";
    counted.textContent = carrot;
    timeCheck.textContent = "0:10";
    timer = setInterval(playCount, 1000);
    for (i = 0; i < carrot; i++) {
      bugCharacter(collection);
      carrotCharacter(collection);
    }
    document.body.append(collection);
  } else {
    startBtn.className = "fas fa-play";
    clearInterval(timer);
  }
};
const handleDath = (event) => {
  const target = event.target.parentElement;
  target.removeChild(event.target);
  clearInterval(timer);
  failure("실패!!!!");
};
const handlecarrot = (event) => {
  const target = event.target.parentElement;
  target.removeChild(event.target);
  counted.textContent--;
  if (counted.textContent === "0") {
    failure("성공! 축하합니다!!!");
  }
};
const bugCharacter = (collection) => {
  const Vertical = Math.random() * 420 - 1 + 1;
  const horizontal = Math.random() * 1300 - 1 + 1;
  const bug = document.createElement("img");
  bug.setAttribute("class", "character-bug");
  bug.setAttribute("src", "img/bug.png");
  bug.style.top = `${Vertical}px`;
  bug.style.left = `${horizontal}px`;
  collection.appendChild(bug);
  bug.addEventListener("click", handleDath);
};
const carrotCharacter = (collection) => {
  const Vertical = Math.random() * 420 - 1 + 1;
  const horizontal = Math.random() * 1300 - 1 + 1;
  const carrot = document.createElement("img");
  carrot.setAttribute("class", "character-carrot");
  carrot.setAttribute("src", "img/carrot.png");
  carrot.style.top = `${Vertical}px`;
  carrot.style.left = `${horizontal}px`;
  collection.appendChild(carrot);
  carrot.addEventListener("click", handlecarrot);
};

const playCount = () => {
  count--;
  timeCheck.textContent = `0:${count}`;
  if (count === 0) {
    failure("시간초과로 실패!");
  }
};

const failure = (ment) => {
  const status = document.createElement("aside");
  const reset = document.createElement("button");
  const resetBtn = document.createElement("i");
  const span = document.createElement("span");
  status.setAttribute("class", "status");
  reset.setAttribute("class", "status-reset");
  resetBtn.setAttribute("class", "fas fa-undo");
  reset.appendChild(resetBtn);
  span.setAttribute("class", "status-text");
  span.textContent = ment;
  status.append(reset);
  status.append(span);
  document.body.appendChild(status);
  clearInterval(timer);

  reset.addEventListener("click", handleReset);
};
const handleReset = () => {
  const finish = document.querySelector(".status");
  count = 10;
  finish.remove();
  startBtn.className = "fas fa-play";
  handelPlay();
};
playBtn.addEventListener("click", handelPlay);
