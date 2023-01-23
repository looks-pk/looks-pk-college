import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

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
                                        <div className='form-floating mb-3'>
                                            <input type="number" className='form-control' id='floatinginput' />
                                            <label htmlFor="floatinginput">From</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input type="number" className='form-control' id='floatinginput1' />
                                            <label htmlFor="floatinginput1">To</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Title Product Tags</h3>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Title Random Products</h3>
                            </div>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore