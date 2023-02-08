import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

const RessetPassword = () => {
  return (
    <>
            <Helmet>
                <Meta title={"Resset Password"} />
                <title>Resset Password</title>
            </Helmet>
            <Breadcrubms title="Resset Password"/>
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-card shadow p-5 mb-5 bg-white rounded">
                                <h3 className='text-center'>Resset Password</h3>
                                <form className='d-flex flex-column gap-15' action="">
                                    <div>
                                        <input name='password' placeholder='Password' type="password" className='form-control' />
                                    </div>
                                    <div>
                                        <input name='confpassword' placeholder='Confirm Password' type="password" className='form-control' />
                                    </div>
                                    <div>
                                        
                                        <div className='d-flex justify-content-center gap-20 align-items-center'>
                                            <button className='button border-0 mt-5'>OK!</button>
                                           
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

export default RessetPassword
