import React from 'react'
import { Link, Outlet } from 'react-router-dom';

interface navBarProps {
  cartNum: number;
}

function NavBar({cartNum}: navBarProps) {
  return (
    <>
      <div className='navBar'>
        <Link to="/">My Store</Link>
        <Link to="/cart">
          <p className="cart-num">Cart: {cartNum}</p>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default NavBar