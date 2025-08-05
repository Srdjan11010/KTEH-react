import React from 'react'

interface navBarProps {
  cartNum: number;
}

function NavBar({cartNum}: navBarProps) {
  return (
    <div className='navBar'>
        <a href="">My Store</a>
        <p className="cart-num">{cartNum}</p>
    </div>
  )
}

export default NavBar