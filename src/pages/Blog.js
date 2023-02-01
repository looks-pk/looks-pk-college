import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import BlogCards from '../components/BlogCards'

const Blog = () => {
    return (
        <>
            <Helmet>
                <Meta title={"Blogs"} />
                <title>Our Store</title>
            </Helmet>
            <Breadcrubms title="Blogs" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Find By Category</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Camera</li>
                                        <li>Tv</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6 mb-4">
                                    <BlogCards/>
                                </div>
                                <div className="col-6 mb-4">
                                    <BlogCards/>
                                </div>
                                <div className="col-6 mb-4">
                                    <BlogCards/>
                                </div>
                                <div className="col-6 mb-4">
                                    <BlogCards/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog
