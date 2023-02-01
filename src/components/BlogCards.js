import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = () => {
  return (
    
      <div className='blog-card'>
        <div className="card-image">
            <img className='img-fluid w-100' src="images/blog-1.jpg" alt="" />
        </div>
        <div className='blog-content'>
            <p className='date'>
                    15-dec-2022
            </p>
            <h5 className="title"> A beautifull Sunday Morning</h5>
            <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, ullam.</p>
            <Link className='button' to={"/"}>Read More</Link>
        </div>
      </div>
    
  )
}

export default BlogCards
