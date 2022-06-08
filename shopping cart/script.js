var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const productList = [
  {name: "APPLE IPHONE 12 MINI 5.4 5G DUAL-SIM A2399", image: "image/apple-iphone-12-mini-54-5g-dual-sim-a2399.jpg", price: "₱42,579.99"},
  {name: "APPLE IPHONE 12 PRO MAX 6.7 5G DUAL SIM A2412", image: "image/apple-iphone-12-pro-max-67-5g-dual-sim-a2412.jpg", price: "₱68,749.99"},
  {name: "GOOGLE PIXEL 4A G025J", image: "image/google-pixel-4a-g025j.jpg", price: "₱19,059.99"},
  {name: "NOKIA 8.3 5G DUAL-SIM TA-1243", image: "image/nokia.jpg", price: "₱26,244.99"}
  ]

  document.getElementById("productItem").innerHTML = `
  ${productList
    .map((item,index) => {
      return `
      <div class="product-item">
      <div class="overlay">
      <a href="" class="product-thumb">
        <img src="${ item.image }">
      </a>
    </div>
    <div class="product-info">
      <span></span>
      <a href="">${ item.name }</a>
      <h4>${ item.price }</h4>
    </div>
      <ul id="cart-${index}" class="icons">
        <li><i class="bx bx-cart"></i></li>
      </ul>
      </div>`;
    })
    .join('')
    }`;
    const btn1 = document.getElementById("cart-0");
    const btn2 = document.getElementById("cart-1");
    const btn3 = document.getElementById("cart-2");
    const btn4 = document.getElementById("cart-3");
    btn1.onclick = () => {
      addToCart(0)
      alert(`successfully added ${ productList[0].name }`);
    }

    btn2.onclick = () => {
      addToCart(1)
      alert(`successfully added ${ productList[1].name }`);
    }

    btn3.onclick = () => {
      addToCart(2)
      alert(`successfully added ${ productList[2].name }`);
    }

    btn4.onclick = () => {
      addToCart(3)
      alert(`successfully added ${ productList[3].name }`);
    }

var shoppingList = [];
function addToCart(index) {
  shoppingList.push(productList[index]);
  console.log(shoppingList);
  let orderRow = document.createElement("div");
  let orderList = document.getElementsByClassName("order-list")[0];
  let orderContent = `<div>${productList[index].name}</div>`
  orderRow.innerHTML = orderContent;
  orderList.append(orderRow);
}


   

