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

document.querySelector(".left").addEventListener("click", () => {
  if (translate < 0) {
    translate += 225;
    sliderElement.style.transform = "translateX(" + translate + "px)";
  }
});

document.querySelector(".right").addEventListener("click", () => {
  console.log("hello");
  if (translate > -1500) {
    translate -= 225;
    sliderElement.style.transform = "translateX(" + translate + "px)";
  }
});
