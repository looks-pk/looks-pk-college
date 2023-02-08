import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const SingleBlog = () => {
    return (
        <>
            <Helmet>
                <Meta title={"Dynamic Blog Nmae"} />
                <title>Dunamic Blog Nmae</title>
            </Helmet>
            <Breadcrubms title="Dynamic Blog Name" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='single-blog-card'>
                                <Link className='d-flex align-items-center gap-10 col-2' to={'/blogs'}> <HiOutlineArrowLeft className='fs-3' /> Go Back To Blogs</Link>
                                <h3 className='title'>A Beautifull Sunday Morning</h3>
                                <img className='img-fluid w-100 my-4' src="/images/blog-1.jpg" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit nisi amet magnam suscipit laboriosam, provident quod voluptatem ipsum quam illum vero incidunt mollitia nemo commodi deleniti at. Ipsum facere tempora, sunt deserunt facilis delectus sit eius autem voluptate magnam eum at corrupti debitis alias magni iste odit vel deleniti consequuntur. Nisi laborum ipsum eligendi possimus ipsam a, esse, sint illum excepturi nam quae tempore quibusdam quidem magni quod illo eius. Non dolore ullam ducimus facilis magni impedit cupiditate perferendis vero. Facilis natus rem nulla quo vitae modi maiores officiis consequuntur error aliquid. Ipsam reiciendis neque in rerum cupiditate. Iusto?</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleBlog
