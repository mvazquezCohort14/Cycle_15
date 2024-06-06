//check for query parameter from login page
const urlParams = new URLSearchParams(window.location.search);
const isLoggedIn = urlParams.get("loggedIn");

console.log(urlParams);
console.log(isLoggedIn);

// if (!isLoggedIn) {
//   window.location.href = "/";
//

const sliderElement = document.querySelector(".slider");
console.dir(sliderElement);

const imgElement = document.querySelector("img");
console.log(imgElement);
console.log(imgElement.width); ///translate the width dynamically

let translate = 0;
document.querySelector(".left").addEventListener("click", () => {
  if (translate < 0) {
    translate += 100;
    sliderElement.style.transform = "translateX(" + translate + "%)";
  }
  console.log(translate);
});

document.querySelector(".right").addEventListener("click", () => {
  if (translate > imgElement.width * -7) {
    translate -= 100;
    sliderElement.style.transform = "translateX(" + translate + "%)";
    console.log(translate);
  }
});
