const left = document.querySelector(".left");
const right = document.querySelector(".right");
const carousel = document.querySelector(".slider");

let translate = 0;

left.addEventListener("click", () => {
  if (translate < 0) {
    translate += 300;
    carousel.style.transform = "translateX(" + translate + "px)";
  }
});

right.addEventListener("click", () => {
  console.log("hello");
  if (translate > -600) {
    translate -= 300;
    carousel.style.transform = "translateX(" + translate + "px)";
  }
});
