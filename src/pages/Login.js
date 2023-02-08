import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Helmet>
                <Meta title={"Login Page"} />
                <title>Login Page</title>
            </Helmet>
            <Breadcrubms title="Login Page" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card shadow p-3 mb-5 bg-white rounded">
                                <h3 className='text-center'>login</h3>
                                <form className='d-flex flex-column gap-15' action="">
                                    <div>
                                        <input name='email' placeholder='Enter Your Email Adress' type="email" className='form-control' />
                                    </div>
                                    <div>
                                        <input name='password' placeholder='enter Your Password Here' type="password" className='form-control' />
                                    </div>
                                    <div>
                                        <Link to={"/ForgotPassword"} >Forgot Passowrd?</Link>
                                        <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <button className='button border-0 mt-5'>Login Now</button>
                                            <Link to={'/signup'} className='button-2 signup border-0 mt-5'>Sign Up</Link>
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

export default Login
