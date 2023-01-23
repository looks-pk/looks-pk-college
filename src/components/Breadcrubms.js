import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrubms = (props) => {
    const {title} = props;
    return (
        <div className='breadcrumb py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                            <Link className='text-dark' to="/">Home</Link>/{title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrubms
