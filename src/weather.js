// /temperature

///grab the select element, option element
const selectElement = document.querySelector("select");
///loop to add the options the select element
for (let i = 0; i < 120; i++) {
  const optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  selectElement.appendChild(optionElement);
}

// /selectElement.addEvent?
selectElement.addEventListener("click", () => {
  ///change img
  const temperatureArr = ["winterWide", "fallWide", "spring@ide", "hotWide"];

  let temperature = temperatureArr[0];

  let temperatureP = `It's cold outside.`;

  if (selectElement.value > 78) {
    temperatureP = `It's HOT outside`;
    temperature = temperatureArr[3];
  } else if (selectElement.value > 68) {
    temperatureP = `It's nice out.`;

    temperature = temperatureArr[2];
  } else if (selectElement.value > 55) {
    temperatureP = `The Fall.... My Fav.`;

    temperature = temperatureArr[1];
  }

  document.querySelector(".temperature > p").textContent = temperatureP;

  document.querySelector(
    ".aside > picture > img"
  ).src = `../assets/${temperature}.jpg`;
  console.log("test");
});

///grab temperature submit button
document
  .querySelector(".temperature > button")
  .addEventListener("click", () => {
    console.log("This button was for the input.");
  });
