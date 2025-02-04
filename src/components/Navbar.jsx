import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
