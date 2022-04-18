$(".header-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".fashion-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    600: {
      items: 1,
      nav: true,
      dots: false,
    },
    1000: {
      items: 1,
      nav: true,
      dots: false,
    },
  },
});
$(".porduct-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false,
    },
    600: {
      items: 2,
      nav: true,
      dots: false,
    },
    1000: {
      items: 4,
      nav: true,
      dots: false,
    },
  },
});
$(".owl-selling-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".price-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$(".blog-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// Light Gallery
lightGallery(document.getElementById("gallery"));

// filter carousel
let list = document.querySelectorAll(".fashion-box ul li");
let fshlist = document.querySelectorAll(".fashion-carousel");
list.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".fashion-box ul li.active")
      .classList.remove("active");
    e.classList.add("active");
    fshlist.forEach((e) => {
      e.classList.add("noactive");
      e.classList.remove("active");
    });
    document.querySelector("." + e.dataset.info).classList.add("active");
    document.querySelector("." + e.dataset.info).classList.remove("noactive");
  });
});
// User Wash Product
var arrproducts = [];
function mywash(product) {
  let productelement =
    product.target.parentElement.parentElement.parentElement.parentElement
      .dataset.product;
  product.target.classList.toggle("wished");
  if (product.target.classList.contains("wished")) {
    let productData = {
      id: Date.now(),
      element: productelement,
    };
    arrproducts.push(productData);
    window.localStorage.setItem("wished", JSON.stringify(arrproducts));
    myaccountwish(productelement);
  } else {
    arrproducts.forEach((e, index) => {
      if (e.element == productelement) {
        arrproducts.splice(index, 1);
        localStorage.setItem("wished", JSON.stringify(arrproducts));
      }
    });
  }
}
// add class wished to li element if it in wished list
let itemsWished = JSON.parse(localStorage.getItem("wished"));
window.addEventListener("load", () => {
  itemsWished.forEach((itemwished) => {
    let dataAttribute = itemwished.element;
    document
      .querySelector("[data-product=" + dataAttribute + "] ul li .fa-heart")
      .classList.add("wished");
  });
});
// OCLOCK Function
let spanhr = document.querySelector(".center-content span.hr");
let spanmin = document.querySelector(".center-content span.min");
let spansec = document.querySelector(".center-content span.sec");
window.onload = function () {
  setInterval(oclockfun, 1000);
};
function oclockfun() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  spanhr.textContent = hr < 10 ? "0" + hr + ":" : hr + ":";
  spanmin.textContent = min < 10 ? "0" + min + ":" : min + ":";
  spansec.textContent = sec < 10 ? "0" + sec : sec;
}
// products carousel
let products = document.querySelectorAll(".parts ul li");
let productscarousel = document.querySelectorAll(".porduct-carousel");
// let fshlist = document.querySelectorAll(".fashion-carousel");
products.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".parts ul li.active").classList.remove("active");
    e.classList.add("active");
    productscarousel.forEach((element) => {
      console.log(element);
      if (element.classList.contains("active")) {
        element.classList.remove("active");
        element.classList.add("noactive");
      }
    });
    document
      .querySelector("." + e.dataset.product)
      .classList.remove("noactive");

    document.querySelector("." + e.dataset.product).classList.add("active");
  });
});

let showSocial = document.querySelector(".show-social");
let goUp = document.querySelector(".go-up");
let social = document.querySelector(".goup .social");
let plus = document.querySelector(".show-social .fa-plus");
let min = document.querySelector(".show-social .fa-window-minimize");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    goUp.classList.add("active");
  } else {
    goUp.classList.remove("active");
  }
});
// go-up click
goUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
min.addEventListener("click", () => {
  social.style.display = "none";
  plus.style.display = "block";
  min.style.display = "none";
});
plus.addEventListener("click", () => {
  social.style.display = "block";
  plus.style.display = "none";
  min.style.display = "block";
});

// show list in categories
function show(event) {
  event.target.classList.toggle("transofrmed");
  if (event.target.classList.contains("transofrmed")) {
    event.target.style.transform = "rotate(90deg)";
  } else {
    event.target.style.transform = "rotate(0deg)";
  }
  event.target.parentElement.nextElementSibling.classList.toggle("show");
}
// make user choose dispaly product 2 or 3 or 4 or one in shop page
let viewlist = document.querySelectorAll(".option-one ul li");
let boxes = document.querySelectorAll(".prod-content .row > div");
function viewAs(elemnet) {
  document.querySelector(".option-one ul li.active").classList.remove("active");
  elemnet.target.classList.add("active");
  boxes.forEach((e) => {
    e.className = "";
    if (elemnet.target.textContent == 2) {
      e.className = "col-md-6";
    } else if (elemnet.target.textContent == 3) {
      e.className = "col-md-4";
    } else if (elemnet.target.textContent == 4) {
      e.className = "col-md-3";
    } else {
      e.className = "col-md-12";
    }
  });
}
// showlist
// let listproduct = document.querySelector(".categories .catelist");
// let listbars = document.querySelector(".categories .cate-heading .fa-bars");
// listbars.onclick = function () {
//   listproduct.classList.toggle("show");
// };
// label aniamtion in contact us
let formInputBoxes = document.querySelectorAll("form .form-input");
formInputBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.firstElementChild.classList.add("return-back");
    box.lastElementChild.classList.add("full-width");
    box.classList.add("active");
  });
});

// profile change item
let accountBox = document.querySelectorAll(".account .account-box");
function changeAccountSetting(item) {
  document.querySelector(".account ul li.active").classList.remove("active");
  item.target.classList.add("active");
  accountBox.forEach((box) => {
    box.classList.add("noactive");
    box.classList.remove("active");
  });
  document
    .querySelector("." + item.target.dataset.profile)
    .classList.remove("noactive");
  document
    .querySelector("." + item.target.dataset.profile)
    .classList.add("active");
}

// upload list wish in profile page
// window.addEventListener("load",myaccountwish)
// let wish = document.querySelector(".account-box .main-box");
// function myaccountwish(product) {
// var mainDiv = document.createElement("div");
// var mainText = document.createTextNode("hello");
// mainDiv.appendChild(mainText);
// var divImg = document.createElement("img")
// var divSpan = document.createElement("span")
// var divUl = document.createElement("ul")
// var divLi = document.createElement("li")
// var divIcon = document.createElement("i")
// console.log(mainDiv);
//   console.log(document.querySelector("[data-product=" + product + "]"));
//   console.log(
//     document.querySelector("[data-product=" + product + "]").firstElementChild
//   );
//   console.log(
//     document.querySelector("[data-product=" + product + "]").lastElementChild
//       .children[1]
//   );
//   console.log(
//     document.querySelector("[data-product=" + product + "]").lastElementChild
//       .children[2]
//   );
//   wish.appendChild(
//     document.querySelector("[data-product=" + product + "]").lastElementChild
//       .children[2]
//   );
// }

// upload product in product page
function openproduct(element) {
  let productArray = [];
  let imgSrc =
    element.target.parentElement.firstElementChild.firstElementChild.src;
  // get product content
  let productContent =
    element.target.parentElement.firstElementChild.firstElementChild
      .nextElementSibling.textContent;
  // get product price
  let priceProduct =
    element.target.parentElement.firstElementChild.lastElementChild
      .firstElementChild.textContent;
  // get product sale
  let priceSale =
    element.target.parentElement.firstElementChild.lastElementChild
      .lastElementChild.textContent;
  // productArray.push(priceSale);
  let allProductInfoObj = {
    src:imgSrc,
    content:productContent,
    price : priceProduct,
    sale : priceSale
  }
  productArray.push(allProductInfoObj)
  window.localStorage.setItem("product-info", JSON.stringify(productArray));
  goToProductPage();
}
function goToProductPage() {
  window.location.href = "product.html";
}

console.log(JSON.parse(localStorage.getItem("product-info")))