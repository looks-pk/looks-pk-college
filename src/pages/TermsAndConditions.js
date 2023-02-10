import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

const TermsAndConditions = () => {
  return (
   <>
   <Helmet>
                <Meta title={"Terms And Conditions"} />
                <title>Terms And Conditions</title>
            </Helmet>
            <Breadcrubms title="Terms And Conditions" />
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

export default TermsAndConditions
