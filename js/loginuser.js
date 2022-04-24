let email = document.getElementById("emailLogin");
let password = document.getElementById("passwordLogin");
async function userLogin() {
  await fetch(`https://emarket3.herokuapp.com/api/users/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((resolved) => resolved.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("user-market-token", data.token);
      localStorage.setItem("user-market-id", data.user._id);
      location.href = "index.html"      
    });
}
// check if user login exist go to home page
window.addEventListener("load", () => {
  if (localStorage.getItem("user-market-token")) {
    location.href = "index.html";
    alert("You Are Logged In Already Logout To Login Again");
  }
});
