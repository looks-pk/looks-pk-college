import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'

const ShippingPolicy = () => {
  return (
    <>
    <Helmet>
                <Meta title={"Shipping Policy"} />
                <title>Shipping Policy</title>
            </Helmet>
            <Breadcrubms title="Shipping Policy" />
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

export default ShippingPolicy
