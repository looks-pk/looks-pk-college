import React,{ useState } from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
    let grid = 3
    const [orderproduct, setOrderproduct] = useState(true)

    return (
        <>
            <Helmet>
                <Meta title={"single product"} />
                <title>Single Product</title>
            </Helmet>
            <Breadcrubms title="single product" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className='discription-wrapper py-5 home-wrapper-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='bg-white p-3'>
                                <h4>Discription</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo officia facilis ab, temporibus rem? Consectetur libero cupiditate quas. Nemo, velit obcaecati! Assumenda natus vel, tenetur voluptatem obcaecati sed temporibus.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value="3"
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Based On <b>515</b> reviews</p>
                                    </div>
                                </div>

                               {orderproduct && <div>
                                    <a className='text-dark text-decoration-underline' href="">
                                        Write A Review
                                    </a>
                                    </div>}
                            </div>
                            </div>
                        </div>
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
        </>
    )
}

export default SingleProduct
