
// $('.add-to-cart-btn').on('click',function(){
//     var id = $(this).attr('id');
//     console.log(id);
//     localStorage.setItem('item-id',id);
//     cartValue = $('.cartAmount').text();
//     cartValue;
//     console.log(cartValue);
//     let newv = parseInt(cartValue) +1;
//     $('.cartAmount').text(newv);
//     console.log('new',newv);
// });



let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
// setInterval(renderSlideAuto, 2000);




/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})





//Database
// var firebaseConfig = {
//     apiKey: "AIzaSyC4lnNuY21tqXAob3ZkJmdV15A7McSuDks",
//     authDomain: "ecommerce-98194.firebaseapp.com",
//     databaseURL: "https://ecommerce-98194-default-rtdb.firebaseio.com",
//     projectId: "ecommerce-98194",
//     storageBucket: "ecommerce-98194.appspot.com",
//     messagingSenderId: "897033013069",
//     appId: "1:897033013069:web:d1a52192e57a3f0097d904",
//     measurementId: "G-QCPVDMDCGW"
//   };


//   firebase.initializeApp(firebaseConfig);

  



  let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
    {
      id: "abc",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "xyz",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
    
  ];

  
//   ------------------------------




// -----------------------------------------------
// main js 
let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      console.log('id-----',id);
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
