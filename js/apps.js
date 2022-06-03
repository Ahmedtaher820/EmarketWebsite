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
// check if this admin or not to show dashboard icon in navigation bar
let robotIcon = document.querySelector(".fa-robot");
window.addEventListener("load", checkAdmin());

async function checkAdmin() {
  let userId = localStorage.getItem("user-market-id");
  if (!userId) {
    robotIcon.parentElement.parentElement.style.display = "none";
    return;
  }
  await fetch(`https://emarket3.herokuapp.com/api/users/getUserById/${userId}`)
    .then((resolved) => resolved.json())
    .then((data) => {
      if (data.user.isAdmin) {
        robotIcon.style.display = "inline-block";
      } else {
        robotIcon.parentElement.parentElement.style.display = "none";
      }
    })
    .catch(() => {});
}

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
  console.log(event.target.parentElement.nextElementSibling)
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
    if (elemnet.target.dataset.count == 2) {
      e.className = "col-md-6";
    } else if (elemnet.target.dataset.count == 3) {
      e.className = "col-md-4";
    } else if (elemnet.target.dataset.count == 4) {
      e.className = "col-md-3";
    } else if (elemnet.target.dataset.count == 1) {
      console.log(elemnet.target.textContent);
      e.className = "col-md-12";
    }
  });
}

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
    src: imgSrc,
    content: productContent,
    price: priceProduct,
    sale: priceSale,
  };
  productArray.push(allProductInfoObj);
  window.localStorage.setItem("product-info", JSON.stringify(productArray));
  goToProductPage();
}
function goToProductPage() {
  window.location.href = "product.html";
}

console.log(JSON.parse(localStorage.getItem("product-info")));
// Check if users is Admin Or Not
window.addEventListener("load", () => {});
// alert to tell user he is login already
