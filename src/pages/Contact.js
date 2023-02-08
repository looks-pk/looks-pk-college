import React from 'react'
import Breadcrubms from '../components/Breadcrubms'
import { Helmet } from 'react-helmet'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiInfoCircle, BiPhoneCall} from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <Helmet>
        <Meta title={"Contact Uss"} />
        <title>Contact Uss</title>
      </Helmet>
      <Breadcrubms title="Contact Uss" />
      <div className='content-wrapper home-wrapper-2 py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9949184510024!2d74.2956645505519!3d31.469325956718567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e287deb3d9%3A0xdc2277fb90c8e155!2sAptech%20Computer%20Education!5e0!3m2!1sen!2s!4v1675406161117!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"> Apptech map</iframe>
            </div>
            <div className="col-12 mt-5">
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div className=''> <h3 className='contact-tilte mb-4'>
                  Contact
                </h3>
                  <form className='gap-15 d-flex flex-column' action="">
                    <div>
                      <input className='form-control ' type="text" placeholder='name' />
                    </div>
                    <div>
                      <input className='form-control ' type="text" placeholder='email' />
                    </div>
                    <div>
                      <input className='form-control ' type="text" placeholder='mobile' />
                    </div>
                    <div>
                      <textarea className='form-control w-100' name="" id="" cols="30" rows="4" placeholder='enter further query'></textarea>
                    </div>
                    <div className=''>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div className=''>
                  <h3 className='contact-tilte mb-4'>
                    Get In Touch With Us
                  </h3>
                  <div >
                    <ul className='ps-0'>
                      <li className='mb-4 gap-15 align-items-center d-flex'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'> 110 multan road</address>
                      </li>
                      <li className='mb-4 gap-15 align-items-center d-flex'>
                      <BiPhoneCall className='fs-5'/>
                      <a href="tel:+923084849490 ">+923084849490</a>
                      </li>
                      <li className='mb-4 gap-15 align-items-center d-flex'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
                      </li>
                      <li className='mb-4 gap-15 align-items-center d-flex'>
                        < BiInfoCircle className='fs-5'/>
                        <p className='mb-0'>monday to friday 24/7 service availble</p>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact
