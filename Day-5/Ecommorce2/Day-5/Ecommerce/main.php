<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon</title>

    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://kit.fontawesome.com/94f511b59c.js" crossorigin="anonymous"></script>

<style>

        /**
* ! Changing default styles of the browser
**/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

i {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: white;
}

/**
* ! Navbar STyles are here
**/

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #212529;
  color: white;
  padding: 25px 60px;
  margin-bottom: 30px;
}

.cart {
  position: relative;
  color: white;
  font-size: 30px;
  padding: 5px;
  border-radius: 4px;
}

.cartAmount {
  outline: none;
  position: absolute;
  top: -21px;
    right: -9px;
  font-size: 1.5rem;
  /* background-color: red; */
  color: white;
  padding: 3px;
  border-radius: 3px;
}

/**
* ! Shop items styles are here
**/

.shop {
  display: grid;
  grid-template-columns: repeat(6, 223px);
  gap: 30px;
  justify-content: center;
}

@media (max-width: 1000px) {
  .shop {
    grid-template-columns: repeat(2, 223px);
  }
}

@media (max-width: 500px) {
  .shop {
    grid-template-columns: repeat(1, 223px);
  }
}

.item {
  border: 2px solid #212529;
  border-radius: 4px;
}

.details {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}

.price-quantity {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 16px;
}

.bi-dash-lg {
  color: red;
}

.bi-plus-lg {
  color: green;
}

/**
* ! style rules for label and some buttons
**/

.text-center {
  text-align: center;
  margin-bottom: 20px;
}

.HomeBtn,
.checkout,
.removeAll {
  background-color: #212529;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.checkout {
  background-color: green;
}
.removeAll {
  background-color: red;
}
.bi-x-lg {
  color: red;
  font-weight: bold;
}

/**
* ! style rules for shopping-cart
**/

.shopping-cart {
  display: grid;
  grid-template-columns: repeat(1, 320px);
  justify-content: center;
  gap: 15px;
}

/**
* ! style rules for cart-item
**/

.cart-item {
  border: 2px solid #212529;
  border-radius: 5px;
  display: flex;
}

.title-price-x {
  width: 195px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid red; */
}

.title-price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item-price {
  background-color: #212529;
  color: white;
  border-radius: 4px;
  padding: 3px 6px;
}

</style>

</head>

<body>
    <header class="header">
        <div class="container container-header">
            <div class="logo-container border-white">
                <div class="logo"></div>
                <span class="dotin">.in</span>
            </div>

            <div class="address-container border-white">
                <p class="hello">Hello</p>
                <div class="icon-address">
                    <i class="fa-solid fa-location-dot icon-location"></i>
                    <p>Select your address</p>
                </div>
            </div>

            <div class="search-container">
                <select class="search-select">
                    <option>All</option>
                </select>
                <input type="text" class="search-input" />
                <div class="search-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>

            <div class="language-container border-white">
                <p>English</p>
                <div class="lauguge-image">
                    <img
                        src="https://media.istockphoto.com/vectors/vector-flag-of-the-republic-of-india-proportion-23-the-national-flag-vector-id1051236720?k=20&m=1051236720&s=612x612&w=0&h=ATObRTHmTosADa9zaB2dQPn_VAQmG1XYH2x92kzc304=" />
                </div>
            </div>

            

            
            <div class="login-container border-white">
                <p>Hello,<span>sign in</span></p>
                <p class="account">Account & Lists</p>
            </div>

            <div class="return-order-container">
                <p>Returns
                <div class="order">& Orders</div>
                </p>
            </div>

            <div class="cart-container">
                <a href="cart.html">
                <div class="cart-container  cart">
                <!-- <p>Cart</p> -->
                    <i class="fa-solid fa-cart-shopping"></i>
                       <div id="cartAmount" class="cartAmount">0</div>
                </div>
                </a>
            </div>

            <!-- <div class="amazone-btn">
                <a href="#">Login</a>
            </div>
            <div class="amazone-btn">
                <a href="#">Sign up</a> -->
            </div>
        </div>
    </header>
    <!--navigation-->
    <nav class="nav">
        <div class="container container-nav">
            <ul>
                <li class="border-white" id="open-nav-sidebar">
                    <span class="open-nav-slider">
                        <i class="fa-solid fa-bars"></i>
                        All
                    </span>
                </li>
                <li class="border-white"><a href="#">Best Sellers</a></li>
                <li class="border-white"><a href="#">Today's Deals</a></li>
                <li class="border-white"><a href="#">Mobiles</a></li>
                <li class="border-white"><a href="#">Customer Service</a></li>
                <li class="border-white"><a href="#">Electronic</a></li>
                <li class="border-white"><a href="#">Home & Kitchen</a></li>
                <li class="border-white"><a href="#">Fashion</a></li>
                <li class="border-white"><a href="#">Book</a></li>
                <li class="border-white prime-image-hover">
                    <a href="#">Prime</a>
                    <div class="prime-image">
                        <img
                            src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg" />
                    </div>

                </li>
            </ul>
            <div class="nav-right-image-amazon-prime">
                <img
                    src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/Watch-Entertainment-for-FREE_400-x39._CB605460886_.jpg" />
            </div>
        </div>
    </nav>

    <!--sidebar navigation-->
    <div class="sidebar-container-navigation" id="sidebar-container-navigation-id">
        <div class="sidebar-left-part">
            <div class="sidebar-top">
                <i class="fa-solid fa-circle-user"></i>
                <h2>Hello, <span>sign in</span></h2>
            </div>
            <div class="sidebar-wrap">
                <div class="sidebar-item">
                    <h2>Trending</h2>
                    <p>Best Sellers</p>
                    <p>New Releases</p>
                    <p>Movers and Shakers</p>
                </div>
                <div class="sidebar-item">
                    <h2>Digital Content And Devices</h2>
                    <p>Echo & Alexa</p>
                    <p>Fire TV</p>
                    <p>Kindle E-Readers & eBooks</p>
                    <p>Audible Audiobooks</p>
                    <p>Amazon Prime Video</p>
                    <p>Amazon Prime Music</p>
                </div>
                <div class="sidebar-item">
                    <h2>Shop By Category</h2>
                    <p>Mobiles, Computes</p>
                    <p>TV, Appliances, Electronic</p>
                    <p>Men's Fashion</p>
                    <p>Women's Fashion</p>
                    <p>See All</p>
                </div>
                <div class="sidebar-item">
                    <h2>Programs & Features</h2>
                    <p>Gift Cards & Mobile Recharges</p>
                    <p>Flight Tickets</p>
                    <p>#Foundlt-OnAmazon</p>
                    <p>Clearance store</p>
                </div>
                <div class="sidebar-item">
                    <h2>Help & Settings</h2>
                    <p>Your Account</p>
                    <p>Customer Service</p>
                    <p>Sign in</p>
                </div>
            </div>
        </div>
        <button id="sidebar-navigation-close">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>




    <!--image slider -->
    <section>
        <div class="image-container">
            <div class="image-list">
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61O72XhcEkL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61VuJdpjvaL._SX3000_.jpg" />
                </div>
                <div class="image-item">
                    <img src="https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg" />
                </div>
            </div>

            <div class="image-btn-container">

                <button class="slider-btn" id="slide-btn-left"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="slider-btn" id="slide-btn-right"><i class="fa-solid fa-chevron-right"></i></i></button>
            </div>
        </div>
    </section>

 


    <!--product container card-->
    <main class="main">
        <div class="card-product-container container">
            <div class="card-product">
                <h2>Up to 60% off | Styles for Men</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" />
                        <p>clothing</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                        <p>Footwear</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Watches</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                        <p>Bags & language</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class="card-product">
                <h2>Redefine your living room</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg" />
                        <p>Sofa cum beds</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg" />
                        <p>Office chairs & study</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg" />
                        <p>Bean bags</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg" />
                        <p>Explore all</p>
                    </div>
                </div>
                <button class="card-product-btn">Visit our furniture store</button>
            </div>
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
        </div>

        <div class="card-product-container container productBackgraound">
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
            <div class="card-product">
                <h2>Top rated, premium quality | Amazon Brands &</h2>
                <div class="card-product-nested-card">
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg" />
                        <p>Home Products</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg" />
                        <p>Furniture</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg" />
                        <p>Daily essentials</p>
                    </div>
                    <div class="card-nested">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg" />
                        <p>Fashion</p>
                    </div>
                </div>
                <button class="card-product-btn">see more</button>
            </div>
        </div>



    
    <!--today's deals -->
    <section class="today_deals_container">
        <div class="today_deals_heading">
            <h1>Today's Deals</h1>
            <p><a href="#">See all deals</a></p>
        </div>

        <div class="today_deals_product_container">
            <!-- <div class="today_deals_btn_container">
                <button  class="today_deal_btn" id="today_deal_btn_prev">
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <button class="today_deal_btn" id="today_deal_btn_next">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div> -->

            <div class="today_deals_product_list">
                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <!-- <a href="#" class="price-tag">5000 </a> -->
                        <!-- <p class="price-tag">5000</p>
                        <a href="#" id="cart">Add to cart</a> -->
                        <button id="inc">
                            Read more
                        </button>
                       
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <!-- <p class="price-tag">7000</p>
                        <a href="" id="cart">Add to cart</a> -->
                        <button id="inc">
                            Read more
                        </button>
                        
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <!-- <p class="price-tag">9000</p>
                        <a href="#" id="cart">Add to cart</a> -->
                        <button id="inc">
                            Read more
                        </button>
                        
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <!-- <p class="price-tag">8000</p>
                        <a href="#" id="cart">Add to cart</a> -->
                        <button id="inc">
                            Read more
                        </button>
                        
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>

                <div class="today_deals_product_item">
                    <img src="https://m.media-amazon.com/images/I/411mbYGYIdL._AC_SY200_.jpg"/>
                    <div class="discount_Contaienr">
                        <a href="#">Up to 52% off</a>
                        <!-- <p class="price-tag">5000</p>
                        <a href="#" id="cart">Add to cart</a> -->
                        <button id="inc">
                            Read more
                        </button>
                        
                    </div>
                    <p>adidas and Campus Footwear</p>
                </div>
            </div>
        </div>

       
    </section>

    <div class="shop" id="shop">


</div>


    </main>
   

    



    





    <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
    <script src="script.js"></script>
</body>

</html>