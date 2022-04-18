let productImg = document.getElementById("product-img");
let ratingImg = document.getElementById("rating-img");
let productHeading = document.getElementById("product-heading");
let ratingText = document.getElementById("rating-text");
let price = document.getElementById("price");
let sale = document.getElementById("sale");
window.addEventListener("load", () => {
  console.log(JSON.parse(localStorage.getItem("product-info")));
  let productFinally = JSON.parse(localStorage.getItem("product-info"));
  productFinally.forEach((e) => {
    productImg.src = e.src;
    ratingImg.src = e.src;
    productHeading.textContent = e.content;
    ratingText.textContent = e.content;
    price.textContent = e.price;
    sale.textContent = e.sale;
  });
});
// Show size chart image
let sizeChart = document.querySelector(".size-chart");
function sizechat() {
  sizeChart.classList.add("active");
}
// close size cheat image
function closeImgChart() {
  sizeChart.classList.remove("active");
}
// to make zoom in function
// productImg.addEventListener("mousemove",(e)=>{
//     let x = e.pageX
//     let y = e.pageY
//     let width = productImg.offsetWidth
//     let height = productImg.offsetHeight
//     let bgposX = (x / width * 100)
//     let bgposY = (y / height * 100)
//     productImg.style.backgroundPosition = `${bgposX}% ${bgposY}%`
// })
