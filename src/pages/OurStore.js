import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const OurStore = (props) => {
    return (
        <>
            <Helmet>
                <Meta title={"Our Store"} />
                <title>Our Store</title>
            </Helmet>
            <Breadcrubms title="Store" />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By Category</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Camera</li>
                                        <li>Tv</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className='sub-title'>Availablity</h5>
                                    <div className='form-check'>
                                        <input className='form-check-input' type="checkbox" value="" id="" />
                                        <label htmlFor="" className='form-check-label'>InStock (1)</label>
                                    </div>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id="" />
                                            <label htmlFor="" className='form-check-label'>OutOfStock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className='form-floating'>
                                            <input type="number" className='form-control' id='floatinginput' />
                                            <label htmlFor="floatinginput">From</label>
                                        </div>
                                        <div className='form-floating'>
                                            <input type="number" className='form-control' id='floatinginput1' />
                                            <label htmlFor="floatinginput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <div className='d-flex flex-wrap'>
                                            <ul className='colors ps-0'>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id="color-1" />
                                            <label htmlFor="color-1" className='form-check-label'>S(2)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type="checkbox" value="" id="color-2" />
                                            <label htmlFor="color-2" className='form-check-label'>M(2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Title Product Tags</h3>
                                <div>
                                    <div className='product-tag d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light rounded-3 py-2 px-3 text-secondary'>
                                            Headphones
                                        </span>
                                        <span className='badge bg-light rounded-3 py-2 px-3 text-secondary'>
                                            Laptop
                                        </span>
                                        <span className='badge bg-light rounded-3 py-2 px-3 text-secondary'>
                                            Watches
                                        </span>
                                        <span className='badge bg-light rounded-3 py-2 px-3 text-secondary'>
                                            Mobiles
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Title Random Products</h3>
                                <div>
                                    <div className='random-products d-flex mb-3'>
                                        <div className='w-50'>
                                            <img className='img-fluid' src="images/watch.jpg" alt="watch" />
                                        </div>
                                        <div className='w-50'>
                                            <h5>this is only one watch in whole world</h5>
                                            <ReactStars
                                                count={5}
                                                size={20}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 756</b>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex mb-3'>
                                        <div className='w-50'>
                                            <img className='img-fluid' src="images/watch.jpg" alt="watch" />
                                        </div>
                                        <div className='w-50'>
                                            <h5>this is only one watch in whole world</h5>
                                            <ReactStars
                                                count={5}
                                                size={20}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 756</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className='filter-sort-grid'>
                                <div className='d-flex justify-content-between  align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 '>Sort.By:</p>
                                        <select className='form-control form-select' name="" id="">
                                            <option value="manual">Featured</option>
                                            <option selected="selected" value="best-selling">Best Selling</option>
                                            <option value="title-ascending">Alphabeticaly, A-Z</option>
                                            <option value="title-descending">Alphabeticaly, Z-A</option>
                                            <option value="price-ascending">Price, Low To High</option>
                                            <option value="price-descending">Price, High To Low</option>
                                            <option value="created-ascending">Date, Old To New</option>
                                            <option value="created-descending">Date, New To Old</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="total-products mt-3">23 Products</p>
                                        <div className="d-flex  filter-grid-svg align-items-center gap-10">
                                            <img src="images/gr4.svg" alt="" className=' d-block img-fluid' />
                                            <img src="images/gr3.svg" alt="" className='d-block img-fluid' />
                                            <img src="images/gr2.svg" alt="" className='d-block img-fluid' />
                                            <img src="images/gr.svg" alt="" className='d-block img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-of-filter d-flex flex-wrap py-2">
                                <div className='col-md-3 my-2 p-1'>
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
                                            <h5 className='product-title'>{('very beautifull watch with silver straps'.slice(0,20)) + '....' }</h5>
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
                                <div className='col-md-3 my-2 p-1'>
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
                                            <h5 className='product-title'>{('very beautifull watch with silver straps'.slice(0,20)) + '....' }</h5>
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
                                <div className='col-md-3 my-2 p-1'>
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
                                            <h5 className='product-title'>{('very beautifull watch with silver straps'.slice(0,20)) + '....' }</h5>
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
                                <div className='col-md-3 my-2 p-1'>
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
                                            <h5 className='product-title'>{('very beautifull watch with silver straps'.slice(0,20)) + '...' }</h5>
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
                                <div className='col-md-3 my-2 p-1'>
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
                                            <h5 className='product-title'>{('very beautifull watch with silver straps'.slice(0,20)) + '....' }</h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore