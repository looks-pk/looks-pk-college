import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <Meta title={"Forgot Password"} />
        <title>Forgot Password</title>
      </Helmet>
      <Breadcrubms title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card shadow p-3 mb-5 bg-white rounded">
                                <h3 className='text-center'>Resset Your Password</h3>
                                <p className='text-center mt-2 mb-3'>we will send you an email to resset your password</p>
                                <form className='d-flex flex-column gap-15' action="">
                                    <div>
                                        <input name='email' placeholder='Enter Your Email Adress' type="email" className='form-control' />
                                    </div>
                                    <div>
                                      
                                        <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <button type='submit' className='button border-0 mt-5'>Submit</button>
                                            <Link to={'/login'}>Cancel</Link>
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

export default ForgotPassword
