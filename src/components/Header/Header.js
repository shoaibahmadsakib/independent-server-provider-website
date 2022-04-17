import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/register">Register</Link>
        <Link to="/product">Product</Link>
    </div>
  )
}

export default Header