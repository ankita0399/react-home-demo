import React from 'react';
const Banner = (props) => {
  return (
    <>
      <section
        class="banner set-bg"
        data-setbg="img/banner/banner-1.jpg"
        style={{
          backgroundImage:
            'url(https://technext.github.io/ashion/img/banner/banner-1.jpg)',
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-8 m-auto">
              <div class="banner__slider owl-carousel owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: 'translate3d(-1305px, 0px, 0px)',
                      transition: 'all 1.2s ease 0s',
                      width: '4568px',
                    }}
                  >
                    <div class="owl-item cloned" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item cloned" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item active" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item cloned" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                    <div class="owl-item cloned" style={{ width: '652.5px' }}>
                      <div class="banner__item">
                        <div class="banner__text">
                          <span>The Chloe Collection</span>
                          <h1>The Project Jacket</h1>
                          <a href="#">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-nav disabled">
                  <button type="button" role="presentation" class="owl-prev">
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button type="button" role="presentation" class="owl-next">
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div class="owl-dots">
                  <button role="button" class="owl-dot active">
                    <span></span>
                  </button>
                  <button role="button" class="owl-dot">
                    <span></span>
                  </button>
                  <button role="button" class="owl-dot">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
