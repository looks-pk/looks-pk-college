import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

const ReturnPolicy = () => {
  return (
   <>
   <Helmet>
                <Meta title={"Return Policy"} />
                <title>Return Policy</title>
            </Helmet>
            <Breadcrubms title="Return Policy" />
            <section className="privacy-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                            <h1>Our Privacy Policy</h1>
                                <p>this is our privacy policy</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}

export default ReturnPolicy
