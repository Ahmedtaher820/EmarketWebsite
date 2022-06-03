let chevList = document.querySelector(".chev-list");
function showList(event) {
  chevList.classList.toggle("rotated");
  if (chevList.classList.contains("rotated")) {
    chevList.style.transform = `rotate(180deg)`;
  } else {
    chevList.style.transform = `rotate(0deg)`;
  }
  event.target.lastElementChild.classList.toggle("active");
}

// Hidden Slider
let leftBox = document.querySelector(".dashboard .left-box");
let rightBox = document.querySelector(".dashboard .right-box");
let medWidth = document.querySelector(".dashboard .med-width");
let minWidth = document.querySelector(".dashboard .min-width");
function hiddenSlider() {
  leftBox.classList.toggle("hidden");
  rightBox.classList.toggle("active");
  if (rightBox.classList.contains("active")) {
    medWidth.style.width = "30px";
    minWidth.style.width = "30px";
  } else {
    medWidth.style.width = "20px";
    minWidth.style.width = "10px";
  }
}
window.addEventListener("resize", (e) => {
  if (window.innerWidth < 991) {
    leftBox.classList.add("hidden");
    rightBox.classList.add("active");
    leftBox.style.width = "75%";
  } else {
    leftBox.classList.remove("hidden");
    rightBox.classList.remove("active");
    leftBox.style.width = "25%";
  }
});
// close Slider In Media Query Screen
function closeSlider() {
  leftBox.classList.add("hidden");
  rightBox.classList.add("active");
}
// Show Profile List In Navigation Bar
function showProfile(event) {
  event.target.lastElementChild.classList.toggle("active");
  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("profile-list")) {
      event.target.lastElementChild.classList.remove("active");
    }
  });
}
// List Account/Password/Address Setting
let accountSetting = document.querySelectorAll(".account-list li");
let acc = document.querySelectorAll(".acc");
accountSetting.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".account-list li.active")
      .classList.remove("active");
    e.classList.add("active");
    acc.forEach((e) => {
      e.classList.add("noactive");
      e.classList.remove("active");
    });
    document.querySelector("." + e.dataset.type).classList.add("active");
    document.querySelector("." + e.dataset.type).classList.remove("noactive");
  });
});
// to get user date to display it
let username = getElement("fname");
let email = getElement("email");
let companyName = getElement("company");
let phone = getElement("phone");
let currpasword = getElement("currpasword");
let newPassword = getElement("newPassword");
let confirmPassword = getElement("confPassword");
let firstAddress = getElement("addressone");
let secondAddress = getElement("addresstwo");
let city = getElement("city");
let country = getElement("country");
let zipCode = getElement("zip");

window.addEventListener("load", getUserDate());
async function getUserDate() {
  let userId = localStorage.getItem("user-market-id");
  await fetch(`https://emarket3.herokuapp.com/api/users/getUserById/${userId}`)
    .then((resolved) => resolved.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".user-name").textContent = data.user.name;
      username.value = data.user.name;
      email.value = data.user.email;
      companyName.value = data.user.companyName;
      phone.value = data.user.phone;
      firstAddress.value = data.user.firstAddress;
      secondAddress.value = data.user.secondAddress;
      city.value = data.user.city;
      country.value = data.user.country;
      zipCode.value = data.user.zipCode;
    });
}
// to Logout
function logout() {
  localStorage.removeItem("user-market-id");
  localStorage.removeItem("user-market-token");
  location.href = "index.html";
  location.reload();
}
// Product image
var productImg;
const productImgFun = function () {
  // let file = document.getElementById("file").files;
  // if (file.length > 0) {
  //   var fileReader = new FileReader();
  //   fileReader.onload = (event) => {
  //     var picture = event.target.result;
  //   };
  //   return fileReader.readAsDataURL(file[0]);
  // }
  console.log(event.target.files[0]);
  productImg = event.target.files[0];

  // let fd = new FormData()
  // localStorage.setItem("poductImg",JSON.stringify(image))
  // console.log(JSON.parse(localStorage.getItem("poductImg"))[0])
};
// Create Product
let productName = getElement("Title");
let price = getElement("Price");
let color = getElement("color");
let brand = getElement("brand");
let description = getElement("Description");
let subCategory = getElement("subCategory");
let quantity = getElement("quantity");
let Category = getElement("Category");
let productArray = [
  productName,
  price,
  color,
  brand,
  description,
  subCategory,
  Category,
];
// to check if inputs is empty or not
productArray.forEach((e) => {
  e.onkeyup = function () {
    if (!e.value.length) {
      e.style.border = "1px solid red";
    } else {
      e.style.border = "1px solid #ff9600";
    }
  };
});
// to send product data to DB
let err = document.querySelector(".error");
// async function createproduct() {
//   let userToken = localStorage.getItem("user-market-token");
//   await fetch(`https://emarket3.herokuapp.com/api/products`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title: productName.value,
//       description: description.value,
//       quantity: quantity.value,
//       price: price.value,
//       colors: [color.value],
//       imageCover: productImg.name,
//       category: Category.value,
//       brand: brand.value,
//       subCategory: [subCategory.value],
//     }),
//   })
//     .then((resolve) => resolve.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

function getElement(id) {
  return document.getElementById(id);
}
