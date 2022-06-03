let userName = document.getElementById("fname");
let fAddress = document.getElementById("fAddress");
let sAddress = document.getElementById("sAddress");
let company = document.getElementById("company");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let country = document.getElementById("country");
let city = document.getElementById("city");
let zipCode = document.getElementById("zipCode");
window.addEventListener("load", getUserInfo());
async function getUserInfo() {
  let userId = localStorage.getItem("user-market-id");
  console.log(userId);
  await fetch(`https://emarket3.herokuapp.com/api/users/getUserById/${userId}`)
    .then((resolve) => resolve.json())
    .then((data) => {
      userName.value = data.user.name;
      fAddress.value = data.user.firstAddress;
      sAddress.value = data.user.secondAddress;
      company.value = data.user.companyName;
      phone.value = data.user.phone;
      email.value = data.user.email;
      country.value = data.user.country;
      city.value = data.user.city;
      zipCode.value = data.user.zipCode;
    });
}
function logoutFun() {
  localStorage.removeItem("user-market-id");
  localStorage.removeItem("user-market-token");
  location.href = "index.html";
}
