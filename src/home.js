//check for query parameter from login page
const urlParams = new URLSearchParams(window.location.search);
const isLoggedIn = urlParams.get("loggedIn");

console.log(urlParams);
console.log(isLoggedIn);

// if (!isLoggedIn) {
//   window.location.href = "/";
// }
