let username = getElement("name");
let password = getElement("pass");
let confirmPassword = getElement("confirmPassword");
let email = getElement("email");
let phone = getElement("phone");
let companyName = getElement("company");
let firstAddress = getElement("address1");
let secondAddress = getElement("address2");
let country = getElement("country");
let city = getElement("city");
let zipCode = getElement("zipCode");
async function registerBtn() {
  try {
    let register = await fetch(
      "https://emarket3.herokuapp.com/api/users/register",
      {
        method: "POST",
        body: JSON.stringify({
          name: username.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
          email: email.value,
          phone: phone.value,
          companyName: companyName.value,
          firstAddress: firstAddress.value,
          secondAddress: secondAddress.value,
          country: country.value,
          city: city.value,
          zipCode: zipCode.value,
          zipCode: zipCode.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(register);
    if (register.ok) {
      window.location.href = "login.html";
    }
  } catch (err) {
    console.log(err);
  }
}
function getElement(id) {
  return document.getElementById(id);
}
// check if user login exist go to home page
window.addEventListener("load", () => {
  if (localStorage.getItem("user-market-token")) {
    location.href = "index.html";
    alert("You Are Logged In Already Logout To Login Again");
  }
});
