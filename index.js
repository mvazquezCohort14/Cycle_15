///submit
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("section > p ").textContent = `${e.target[0].value}`;
});

///temperature

///grab temperature input element
const temperatureInputElement = document.querySelector(".temperature > input");
console.log(temperatureInputElement);

///grab temperature submit button
document
  .querySelector(".temperature > button")
  .addEventListener("click", () => {
    console.log("Hello");

    document.querySelector(".temperature > p").textContent = "test";

    ///change img
    const temperatureArr = ["winter", "fall", "spring", "hot"];

    let temperature;

    if (temperatureInputElement.value > 78) {
      temperature = temperatureArr[3];
    } else if (temperatureInputElement.value > 68) {
      temperature = temperatureArr[2];
    } else if (temperatureInputElement.value > 55) {
      temperature = temperatureArr[1];
    } else {
      temperature = temperatureArr[0];
    }

    document.querySelector(
      ".temperature > img"
    ).src = `./assets/${temperature}.jpg`;
  });
