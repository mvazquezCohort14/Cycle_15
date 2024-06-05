//check for query parameter from login page
const urlParams = new URLSearchParams(window.location.search);
const isLoggedIn = urlParams.get("loggedIn");

console.log(urlParams);
console.log(isLoggedIn);

// if (!isLoggedIn) {
//   window.location.href = "/";
//

let translate = 0;

const sliderElement = document.querySelector(".slider");
console.dir(sliderElement);

const slidewidth = sliderElement.offsetWidth;
console.log(slidewidth);

document.querySelector(".left").addEventListener("click", () => {
  if (translate < 0) {
    translate += 400;
    sliderElement.style.transform = "translateX(" + translate + "px)";
  }
});

document.querySelector(".right").addEventListener("click", () => {
  console.log("hello");
  if (translate > -2500) {
    translate -= 400;
    sliderElement.style.transform = "translateX(" + translate + "px)";
  }
});
