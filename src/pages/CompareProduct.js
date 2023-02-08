import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import Color from '../components/Color'

const CompareProduct = () => {
    return (
        <>
            <Helmet>
                <Meta title={"Compare Products"} />
                <title>Compare Product</title>
            </Helmet>
            <Breadcrubms title="Compare Products" />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-detail">
                                    <h5 className='title '>watch</h5>
                                    <h6 className='price mb-3 mt-3'>$100 </h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5 className=''> Brand:</h5>
                                            <p> Rollex</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Type:</h5>
                                            <p> Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Availability:</h5>
                                            <p> Instock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Colors:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Size:</h5>
                                         <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-detail">
                                    <h5 className='title '>watch</h5>
                                    <h6 className='price mb-3 mt-3'>$100 </h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5 className=''> Brand:</h5>
                                            <p> Rollex</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Type:</h5>
                                            <p> Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Availability:</h5>
                                            <p> Instock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Colors:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Size:</h5>
                                         <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>  
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-detail">
                                    <h5 className='title '>watch</h5>
                                    <h6 className='price mb-3 mt-3'>$100 </h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5 className=''> Brand:</h5>
                                            <p> Rollex</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Type:</h5>
                                            <p> Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Availability:</h5>
                                            <p> Instock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Colors:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Size:</h5>
                                         <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-detail">
                                    <h5 className='title '>watch</h5>
                                    <h6 className='price mb-3 mt-3'>$100 </h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5 className=''> Brand:</h5>
                                            <p> Rollex</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Type:</h5>
                                            <p> Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Availability:</h5>
                                            <p> Instock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Colors:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5 className=''> Size:</h5>
                                         <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>  
                                        </div>
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

export default CompareProduct
