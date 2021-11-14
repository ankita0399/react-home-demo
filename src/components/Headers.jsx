import React, { useState } from 'react';
import '../SearchBarSection.css';

const Headers = (props) => {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     title: 'Check Textured Coat',
  //     category: 'Coat',
  //     price: '175.4',
  //     tags: 'coat check textured camel brown long sleeves buttoned cuffs',
  //   },
  //   {
  //     id: 2,
  //     title: 'Contrast Check Coat',
  //     category: 'Coat',
  //     price: '155.4',
  //     tags: 'coat camel black grey marl lapel collar hip flap pockets',
  //   },
  //   {
  //     id: 3,
  //     title: 'White Coat',
  //     category: 'Coat',
  //     price: '125.4',
  //     tags: 'coat camel white short sleeves double-breasted button',
  //   },
  //   {
  //     id: 4,
  //     title: 'Basic Hoodie',
  //     category: 'Hoodies / SweatShirts',
  //     price: '55.4',
  //     tags: 'hoodie solid plain purple long baggy hood',
  //   },
  //   {
  //     id: 5,
  //     title: 'Basic Hoodie',
  //     category: 'Hoodies / SweatShirts',
  //     price: '55.4',
  //     tags: 'hoodie solid plain black long baggy hood',
  //   },
  //   {
  //     id: 6,
  //     title: 'Basic short Hoodie',
  //     category: 'Hoodies / SweatShirts',
  //     price: '55.4',
  //     tags: 'hoodie solid plain gray grey short hood',
  //   },
  // ]);

  const [search, setSearch] = useState('');

  // const filteredProducts = products.filter((product) => {
  //   if (
  //     product.tags.toLowerCase().includes(search) ||
  //     product.title.toLowerCase().includes(search) ||
  //     product.category.toLowerCase().includes(search)
  //   ) {
  //     return product;
  //   }
  // });

  return (
    <>
      <header class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-2">
              <div class="header__logo">
                <a href="./index.html">
                  <img src="./logo.png" alt="The Classic Ladies" />
                </a>
              </div>
            </div>
            <div class="col-xl-6 col-lg-7">
              {/* <nav class="header__menu">
                <ul>
                  <li class="active">
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Women’s</a>
                  </li>
                  <li>
                    <a href="#">Men’s</a>
                  </li>
                  <li>
                    <a href="./shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul class="dropdown">
                      <li>
                        <a href="./product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="./shop-cart.html">Shop Cart</a>
                      </li>
                      <li>
                        <a href="./checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav> */}
              <div className="searchBarSection">
                <div class="searchBar">
                  <input
                    className="input"
                    onChange={(e) => {
                      setSearch(e.target.value.toLowerCase());
                    }}
                  />
                  <button className="button">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <div className="display">
                  {filteredProducts.map((product) => (
                    <div className="product">
                      <h6>{product.category}</h6>
                      <h3>{product.title}</h3>
                      <h5>{product.price}</h5>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div class="col-lg-3">
              <div class="header__right">
                <div class="header__right__auth">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                </div>
                <ul class="header__right__widget">
                  <li>
                    <span class="icon_search search-switch"></span>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon_heart_alt"></span>
                      <div class="tip">2</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon_bag_alt"></span>
                      <div class="tip">2</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="canvas__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};
export default Headers;
