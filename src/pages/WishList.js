import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

const WishList = () => {
  return (
    <>
    <Helmet>
                <Meta title={"Compare Products"} />
                <title>Compare Product</title>
            </Helmet>
            <Breadcrubms title="Compare Products" />
            <div className="wish-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="wihslist-card position-relative">
                                <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                                <div className="wishlist-card-image ">
                                <img className='img-fluid w-100' src="images/watch.jpg" alt="" />
                                </div>
                                <div className="py-3">
                                    <h5 className='title'>Rolex 2023 Model</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default WishList
