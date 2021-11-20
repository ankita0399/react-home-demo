import React from 'react';

const ProductSection = (props) => {
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New product</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">
              <li className="active mixitup-control-active" data-filter="*">
                All
              </li>
              <li data-filter=".women" className="">
                Women’s
              </li>
              <li data-filter=".men" className="">
                Men’s
              </li>
              <li data-filter=".kid" className="">
                Kid’s
              </li>
              <li data-filter=".accessories" className="">
                Accessories
              </li>
              <li data-filter=".cosmetic" className="">
                Cosmetics
              </li>
            </ul>
          </div>
        </div>
        <div className="row property__gallery" id="MixItUp2F922D">
          <div className="col-lg-3 col-md-4 col-sm-6 mix women">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-1.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-1.jpg)',
                }}
              >
                <div className="label new">New</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-1.jpg" className="image-popup">
                      <span className="fas fa-cart-plus"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fas fa-cart-plus"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fas fa-cart-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Buttons tweed blazer</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">&#8377; 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix men">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-2.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-2.jpg)',
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-2.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fas fa-cart-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Flowy striped skirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">&#8377; 49.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-3.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-3.jpg)',
                }}
              >
                <div className="label stockout">out of stock</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-3.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fas fa-cart-plus"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fas fa-cart-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Cotton T-Shirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">&#8377; 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-4.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-4.jpg)',
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-4.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Slim striped pocket shirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">&#8377; 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-5.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-5.jpg)',
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-5.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Fit micro corduroy shirt</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">&#8377; 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div className="product__item sale">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-6.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-6.jpg)',
                }}
              >
                <div className="label sale">Sale</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-6.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Tropical Kimono</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">
                  &#8377; 49.0 <span>&#8377; 59.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-7.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-7.jpg)',
                }}
              >
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-7.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Contrasting sunglasses</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">&#8377; 59.0</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
            <div className="product__item sale">
              <div
                className="product__item__pic set-bg"
                data-setbg="img/product/product-8.jpg"
                style={{
                  backgroundImage:
                    'url(https://technext.github.io/ashion/img/product/product-8.jpg)',
                }}
              >
                <div className="label">Sale</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/product/product-8.jpg" className="image-popup">
                      <span className="arrow_expand"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product__item__text">
                <h6>
                  <a href="#">Water resistant backpack</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">
                  &#8377; 49.0 <span>&#8377; 59.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductSection;
