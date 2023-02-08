import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { BsChatLeftText,BsShop } from 'react-icons/bs'
import {FaSalesforce,} from 'react-icons/fa'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const MobMenu = () => {
    if (menu === false) {
      setMenu(true)
    }
    else if (menu === true) {
      setMenu(false)
    }
  }
  return (
    <>
      <header className='d-none d-sm-block header-top-strip py-1'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>free shipping over 100$ and Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Helpline : <a className='text-white' href="tel:+923084849490">+923084849490</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='d-none d-sm-block header-upper second-header'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2"><h2>
              <Link className='text-white third-header-link'>loOks.PK</Link>
            </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="search Product Here" aria-label="search Product Here" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <span className="input-group-text h-100 py-2 bd-left" id="basic-addon2">
                    <BsSearch className='fs-4' />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div><Link to={"/Compare-Product"} className='third-header-link'><img className='header-2-mx' src="images/compare.svg" alt="" />Compare </Link></div>
                <div><Link to={"Wishlist"} className='third-header-link'><img className='header-2-mx' src="images/wishlist.svg" alt="" />WishList</Link></div>
                <div><Link to={"/Login"} className='third-header-link'><img className='header-2-mx' src="images/user.svg" alt="" />Login/Sign Up</Link></div>
                <div><Link to={"/Cart"} className='third-header-link'><img className='header-2-mx' src="images/cart.svg" alt="" />Cart</Link></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='d-none d-sm-block header-bottom'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div> <div className="dropdown">
                  <button className="btn btn-secondary bg-transparent border-0 dropdown-toggle d-flex gap-15 align-items-center third-header-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <img src="images/menu.svg" alt="" />
                    <span >Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item text-white" to="/">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                  </ul>
                </div>
                </div>

                <div className='menu-links'>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="third-header-link" to="/">Home</NavLink>
                    <NavLink className="third-header-link" to="/Store">Store</NavLink>
                    <NavLink className="third-header-link" to="/Blogs">Blog</NavLink>
                    <NavLink className="third-header-link" to="/Contact">Contact Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='d-block bg-hf-mob d-sm-none fixed-top'>
        {menu === true && <div className='bg-dark menu-layout text-white'>
          <button className='p-2 rounded' onClick={MobMenu}>X</button>
          <div className="input-group p-3 mt-3">
            <input type="text" className="form-control py-2" placeholder="search products Here" aria-label="search Product Here" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text h-100 py-2 bd-left" id="basic-addon2">
                <BsSearch className='fs-4'/>
              </span>
            </div>
          </div>
            <li className='border mx-1 my-4'>
              <img className='mx-2' src="images/compare.svg" alt="" />
              Compare</li>
            <li className='border mx-1 my-4'>
              <img className='mx-2' src="images/wishlist.svg" alt="" />
              Wish List</li>
            <li className='border mx-1 my-4'>
              <img className='mx-2' src="images/user.svg" alt="" />
              Account</li>
            <li className='border mx-1 my-4'>
              <img className='mx-2' src="images/cart.svg" alt="" />
              Cart</li>
        </div>}
        <div className="container py-2">
          <div className="d-flex justify-content-between">
            <div>
              <Link className='text-white'>loOks.PK</Link>
            </div>
            <div>
              <img src="logo192.png" width={30} alt="" />
            </div>
            <div>
              <button className='rounded px-2' onClick={MobMenu}>| | |</button>
            </div>
          </div>
        </div>
      </header>
      {menu === false && <header className='text-white d-block d-sm-none fixed-bottom bg-hf-mob'>
        <div className="container-xxl">
          <div className="d-flex justify-content-between">
            <div><BsChatLeftText className='mx-2 my-2'/><h6>Chat</h6></div>
            <div><BsShop className='mx-2 my-2'/><h6>Shop</h6></div>
            <div><FaSalesforce className='mx-3 my-2'/><h6>Blogs</h6></div>
            <div><FaSalesforce className='mx-3 my-2'/><h6>On Sale</h6></div>
          </div>
        </div>
      </header>}
    </>
  )
}

export default Header;
