///submit form. username password

let userEmail = "lly@icstars.org";
let password = "password@1";

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  // e.preventDefault();

  if (e.target[0].value == "lly@icstars.org" && e.target[1].value == password) {
    ///form action with query parameter so a user can not just type the page in the url
    //TODO: couldnt get this to work. think it has to come from a server
    formElement.action = "./src/home.html?loggedIn=true";
  } else {
    alert("credentials are incorrect");
  }
});
