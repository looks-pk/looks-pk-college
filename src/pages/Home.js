import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCards from '../components/BlogCards'
import ProductCard from '../components/ProductCard'
import SpeacialProducts from '../components/SpeacialProducts'

const Home = () => {
  
  let grid = 3;

  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <div className="main-banner position-relative p-3">
                <img className='img-fluid rounded-3' src="images/main-banner-1.jpg" alt="main banner" />
                <div className='main-banner-content position-absolute'>
                  <h4>supper charged for pros</h4>
                  <h5>IPad S13 +Pro</h5>
                  <p>From $999.00 or $41.99 /mo </p>
                  <Link className='button'>BuyNow</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className='d-md-flex flex-wrap mt-3 align-items-center'>
                <div className="small-banner position-relative p-1">
                  <img className='img-fluid rounded-3' src="images/catbanner-01.jpg" alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>supper charged for pros</h4>
                    <h5>IPad S13 +Pro</h5>
                    <p>From $999.00 <br /> or $41.99 /mo </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img className='img-fluid rounded-3' src="images/catbanner-02.jpg" alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>supper charged for pros</h4>
                    <h5>IPad S13 +Pro</h5>
                    <p>From $999.00 <br /> or $41.99 /mo </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1">
                  <img className='img-fluid rounded-3' src="images/catbanner-03.jpg" alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>supper charged for pros</h4>
                    <h5>IPad S13 +Pro</h5>
                    <p>From $999.00<br /> or $41.99 /mo </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-1 ">
                  <img className='img-fluid rounded-3' src="images/catbanner-04.jpg" alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>supper charged for pros</h4>
                    <h5>IPad S13 +Pro</h5>
                    <p>From $999.00 <br /> or $41.99 /mo </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="services  d-md-flex align-items-center justify-content-between">
                <div className='d-md-flex align-items-center my-2 bg-white p-4 '>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>free shipping
                      <p>From All orders over $100</p>
                    </h6>
                  </div>
                </div>
                <div className='d-md-flex align-items-center my-2 bg-white p-4 '>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily serpurize Offers
                      <p>save 25% OFF</p>
                    </h6>
                  </div>
                </div>
                <div className='d-md-flex align-items-center my-2 bg-white p-4'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>support 24/7
                      <p>Shop With An Expert</p>
                    </h6>
                  </div>
                </div>
                <div className='d-md-flex align-items-center my-2 bg-white p-4'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable pricess
                      <p>Get Factory Default price</p>
                    </h6>
                  </div>
                </div>
                <div className='d-md-flex align-items-center my-2 bg-white p-4'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments
                      <p>100% protected Payment</p>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 '>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="categories d-md-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center '>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>Music</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='cat-mob d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper ">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-02.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="" />
                  </div>
                  <div>
                    <img src="images/brand-07.png" alt="" />
                  </div>
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-08.png" alt="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2 '>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Featured Collections</h3>
            </div>
            <ProductCard grid={grid}/>
          </div>
        </div>
      </section>
      <section className='famous-wrapper home-wrapper-2 py-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-3 my-2">
              <div className="famous-card position-relative">
                <img className='img-fluid' src="images/laptop-22.jpg" alt="" />
                <div className='famous-content position-absolute'>
                  <h5>big screen</h5>
                  <h6>smart watch series</h6>
                  <p>from $300 or $1500 per month of</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="famous-card position-relative">
                <img className='img-fluid' src="images/laptop-22.jpg" alt="" />
                <div className='famous-content position-absolute'>
                  <h5>big screen</h5>
                  <h6>smart watch series</h6>
                  <p>from $300 or $1500 per month of</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="famous-card position-relative">
                <img className='img-fluid' src="images/laptop-22.jpg" alt="" />
                <div className='famous-content position-absolute'>
                  <h5>big screen</h5>
                  <h6>smart watch series</h6>
                  <p>from $300 or $1500 per month of</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="famous-card position-relative">
                <img className='img-fluid' src="images/laptop-22.jpg" alt="" />
                <div className='famous-content position-absolute'>
                  <h5>big screen</h5>
                  <h6>smart watch series</h6>
                  <p>from $300 or $1500 per month of</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Special product</h3>
            </div>
          </div>
          <div className="row">
            <SpeacialProducts />
            <SpeacialProducts />
            <SpeacialProducts />
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2 '>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <ProductCard grid={grid} />
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className='.section-heading'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCards/>
            </div>
            <div className="col-3">
              <BlogCards/>
            </div>
            <div className="col-3">
              <BlogCards/>
            </div>
            <div className="col-3">
              <BlogCards/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
