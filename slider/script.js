const pictures = [];
function slide(step) {
  if (currentIndex === 0 && step === -1) {
    currentIndex = pictures.length;
  }
  if (currentIndex === pictures.length - 1 && step === 1) {
    currentIndex = -1;
  }
  currentIndex = currentIndex + step;
  frame.style.backgroundImage = `url(${pictures[currentIndex]})`;
  activatePoint();
}

function goTo(index) {
  currentIndex = index;
  frame.style.backgroundImage = `url(/slider/img/nat_1.jpg)`;
  frame.style.backgroundImage = `url(${pictures[currentIndex]})`;
  activatePoint();
}
function activatePoint() {
  document.querySelector(".active").classList.remove("active");
  document.querySelectorAll("button")[currentIndex].classList.add("active");
}

const dots = document.querySelectorAll(".dot");
if (dots.length > pictures.length) {
  nav.removeChild(dots[pictures.length]);
}

function plusImg() {
  const input = document.getElementById("links");
  const link = input.value.trim();

  if (link) {
    pictures.push(link);
    input.value = "";
    drawDots();
  }
}

function minusImg() {
  if (pictures.length > 0) {
    pictures.pop();
    drawDots();
  }
}
function drawDots() {

  const nav = document.querySelector(".nav");
  nav.innerHTML = '';

  for (let i = 0; i < pictures.length; i++) {
    const dot = document.createElement("button");
    dot.className = 'dot active';
    dot.setAttribute("onclick", `goTo(${i})`);
    dot.style.height = `15px`;
    dot.style.borderRadius = `50%`;
    dot.style.backgroundColor = `white`;
    dot.style.cursor = `pointer`;
    nav.appendChild(dot);
  }
  activatePoint();
}
const plusBtn = document.querySelector('.add');
plusBtn.addEventListener('click', plusImg);

const minusBtn = document.querySelector('.remove');
minusBtn.addEventListener('click', minusImg);
