const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("Next");

let currentValue = 1;

next.addEventListener("click", () => {
  currentValue++;
  if (currentValue > circles.length) {
    currentValue = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentValue--;
  if (currentValue == 1) {
    currentValue = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentValue) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  let active = document.querySelectorAll(".active");

  progress.style.width = `${
    ((active.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentValue == 1) {
    prev.disabled = true;
  } else if (currentValue == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
