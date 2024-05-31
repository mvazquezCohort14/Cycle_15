///submit
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("section > p ").textContent = `${e.target[0].value}`;
});

///temperature

///grab, temperature input element
const temperatureInputElement = document.querySelector(".temperature > input");
console.log(temperatureInputElement);

///grab temperature submit button
document
  .querySelector(".temperature > button")
  .addEventListener("click", () => {
    console.log("Hello");

    document.querySelector(
      ".temperature > p"
    ).textContent = `Hello ${temperatureInputElement.value}`;

    ///change img
    const temperatureArr = ["winterWide", "fallWide", "spring@ide", "hotWide"];

    let temperature = temperatureArr[0];
    console.log(temperature);

    if (temperatureInputElement.value > 78) {
      temperature = temperatureArr[3];
    } else if (temperatureInputElement.value > 68) {
      temperature = temperatureArr[2];
    } else if (temperatureInputElement.value > 55) {
      temperature = temperatureArr[1];
    }

    document.querySelector(
      ".aside > picture > img"
    ).src = `./assets/${temperature}.jpg`;
  });
