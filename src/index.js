///submit form. username password

let userEmail = "lly@icstars.org";
let password = "password@1";

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  // e.preventDefault();

  if (e.target[0].value == "lly@icstars.org" && e.target[1].value == password) {
    formElement.action = "./src/home.html";
    // formElement.reset();
    // formElement.target = "_blank";
  } else {
    alert("credentials are incorrect");
  }
});
