import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';






const ProductCard = (props) => {
  const{grid} = props;
  let location = useLocation();
  return (
    <>
    <div className={`${location.pathname === "/Store"}`?`p-1 col-md-${grid}`:"col-md-3"}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="" /></Link>
        </div>
        <div className="product-image">
          <img className='img-fluid' src="images/watch.jpg" alt="" />
          <img className='img-fluid' src="images/watch-1.png" alt="" />
        </div>
        <div className="product-details">
          <h6 className="brand">Rollex</h6>
          <h5 className='product-title'>very beautifull watch with silver straps</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>$15</p>
        </div>
        <dir className="action-bar position-absolute">
          <div className='d-flex flex-column gap-15'>
            <Link> <img src="images/prodcompare.svg" alt="" /></Link>
            <Link> <img src="images/view.svg" alt="" /></Link>
            <Link> <img src="images/add-cart.svg" alt="" /></Link>
          </div>
        </dir>
      </div>
      
    </div>
    <div className={`${location.pathname === "/Store"}`?`p-1 col-md-${grid}`:"col-md-3"}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="" /></Link>
        </div>
        <div className="product-image">
          <img className='img-fluid' src="images/watch-2.jpg" alt="1" />
          <img className='img-fluid' src="images/watch-3.png" alt="2" />
        </div>
        <div className="product-details">
          <h6 className="brand">Rollex</h6>
          <h5 className='product-title'>very beautifull watch with silver straps</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>$15</p>
        </div>
        <dir className="action-bar position-absolute">
          <div className='d-flex flex-column gap-15'>
            <Link> <img src="images/prodcompare.svg" alt="" /></Link>
            <Link> <img src="images/view.svg" alt="" /></Link>
            <Link> <img src="images/add-cart.svg" alt="" /></Link>
          </div>
        </dir>
      </div>
    </div>
    <div className={`${location.pathname === "/Store"}`?`p-1 col-md-${grid}`:"col-md-3"}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="" /></Link>
        </div>
        <div className="product-image">
          <img className='img-fluid' src="images/watch-4.jpg" alt="1" />
          <img className='img-fluid' src="images/watch-5.png" alt="2" />
        </div>
        <div className="product-details">
          <h6 className="brand">Rollex</h6>
          <h5 className='product-title'>very beautifull watch with silver straps</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>$15</p>
        </div>
        <dir className="action-bar position-absolute">
          <div className='d-flex flex-column gap-15'>
            <Link> <img src="images/prodcompare.svg" alt="" /></Link>
            <Link> <img src="images/view.svg" alt="" /></Link>
            <Link> <img src="images/add-cart.svg" alt="" /></Link>
          </div>
        </dir>
      </div>
      
    </div>
    <div className={`${location.pathname === "/Store"}`?`p-1 col-md-${grid}`:"col-md-3"}>
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="" /></Link>
        </div>
        <div className="product-image">
          <img className='img-fluid' src="images/watch-6.png" alt="1" />
          <img className='img-fluid' src="images/watch-7.png" alt="2" />
        </div>
        <div className="product-details">
          <h6 className="brand">Rollex</h6>
          <h5 className='product-title'>very beautifull watch with silver straps</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>$15</p>
        </div>
        <dir className="action-bar position-absolute">
          <div className='d-flex flex-column gap-15'>
            <Link> <img src="images/prodcompare.svg" alt="" /></Link>
            <Link> <img src="images/view.svg" alt="" /></Link>
            <Link> <img src="images/add-cart.svg" alt="" /></Link>
          </div>
        </dir>
      </div>
      
    </div>
    </>
  )
}

export default ProductCard;
