import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '8px',
}

const linkStyle ={
    color: '#fff',
    textDecoration: 'none',
}

export default function Header() {
  return (
      <header style={headerStyle}>
          <h1>TODO List</h1>
          <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      </header>
  )

 
}
