import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import {Link} from 'react-router-dom'
import 'animate.css'

const Navbar = () => {
  return (
    <Link to='/'>
      <div>
          <div className="navbar">
              <FaCoins className="icon"/>
              <h1 className='white'>Crypto Coin <span className='gold animate__slideInDown animate__delay-1s'>Search</span></h1>
          </div>
      </div>
    </Link>
  )
}

export default Navbar