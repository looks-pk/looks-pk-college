import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

const SignUp = () => {
  return (
    <>
    <Helmet>
        <Meta title={"Sign Up Here"} />
        <title>Sign Up</title>
    </Helmet>
    <Breadcrubms title="Sign Up Here" />
    <div className="signup-wrapper py-3 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="signup-card shadow p-5 mb-5 bg-white rounded">
                        <h3 className='text-center mb-5'>Create Account </h3>
                        <form className='d-flex flex-column gap-15' action="">
                            <div>
                                <input name='fullname' placeholder='Enter Your Full Name' type="text" className='form-control'/>
                            </div>
                            <div>
                                <input name='mobile' placeholder='Enter Your Mobile Number Name' type="tel" className='form-control'/>
                            </div>
                            <div>
                                <input name='email' placeholder='Enter Your Email Adress' type="email" className='form-control'/>
                            </div>
                            <div>
                                <input name='password' placeholder='enter Your Password Here' type="password" className='form-control'/>
                            </div>
                            <div>
                                <div className='d-flex justify-content-center gap-20 align-items-center'>
                                    <button className='button border-0 mt-5'>Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default SignUp
