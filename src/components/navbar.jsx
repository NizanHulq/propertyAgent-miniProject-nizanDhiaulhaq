import React, { useState } from 'react';
import { Nav, NavItem, Navbar, NavbarBrand, NavbarText } from 'reactstrap';

import headerLogo from '@/assets/header-logo2.svg'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function MyNavbar(args) {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false)
  const [user, setUser] = useState({})
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const renderNavAgent = () => {
    if (isLoggedIn && user) {
      if (user.role === 'agent')
        return (
          <>
            <NavItem>
              <Link className="nav-link fw-semibold" to="/property/create">Add Property</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link fw-semibold" to="/contact">Message</Link>
            </NavItem>
          </>
        )
    }
  }

  const renderBtnLogin = () => {
    if (!isLoggedIn) {
      return (
        <Link className="nav-link fw-semibold" to="/login"><FontAwesomeIcon className='me-2' icon={faRightToBracket} />Login/Register</Link>
      )
    } else {
      return (
        <Link className="nav-link fw-semibold" onClick={logout}><FontAwesomeIcon className='me-2' icon={faUserCircle} />Logout</Link>
      )
    }
  }

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
    setUser({})
    toast.promise(new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLoggedIn !== false) {
          resolve("Selamat anda berhasil keluar")
        } else {
          reject("Anda gagal keluar")
        }
      }, 1000)
    }), {
      pending: 'Loading...',
      success: {
        render: "Selamat anda berhasil keluar",
        onClose: () => navigate('/login')
      },
      error: "Gagal keluar"
    });

  }

  return (
    <div>
      <Navbar className='px-5' style={{ backgroundColor: "#FFF", height: "70px" }} expand="md" fixed='top'>
        <Link to="/">
          <img src={headerLogo} alt="" />
        </Link>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link className="nav-link fw-semibold" to="/">Home</Link>
          </NavItem>
          {renderNavAgent()}
        </Nav>
        {renderBtnLogin()}
      </Navbar>
    </div>
  );
}

export default MyNavbar;