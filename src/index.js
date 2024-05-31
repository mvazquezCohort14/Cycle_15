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

    ///change img
    const temperatureArr = ["winterWide", "fallWide", "spring@ide", "hotWide"];

    let temperature = temperatureArr[0];

    let temperatureP = `It's very cold outside.`;

    if (temperatureInputElement.value > 78) {
      temperatureP = `It's HOT outside`;
      temperature = temperatureArr[3];
    } else if (temperatureInputElement.value > 68) {
      temperatureP = `It's nice out.`;

      temperature = temperatureArr[2];
    } else if (temperatureInputElement.value > 55) {
      temperatureP = `The Fall.... My Fav.`;

      temperature = temperatureArr[1];
    }

    document.querySelector(".temperature > p").textContent = temperatureP;

    document.querySelector(
      ".aside > picture > img"
    ).src = `./assets/${temperature}.jpg`;
  });
