import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import '../../assets/css/navbar.css'

const Navbar = () => {
  return (
    <>
    <header className={`header`}>
    <nav className="logo-title">
      <h3>E-Mali</h3>
      <FontAwesomeIcon className='theme-button' icon={faHotel} size='2x'/>

    </nav>
    <nav className="navbar-links">
        <ul className="list-links">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='properties'>Properties</NavLink>
            </li>
            <li>
                <NavLink to='saved'>Saved</NavLink>
            </li>
        </ul>
    </nav>
    <nav className="navbar-links">
      <ul className="list-links">
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
        <li>
          <NavLink to='login'>Login</NavLink>
        </li>
      </ul>
    </nav>
    </header>
    </>
  )
}

export default Navbar