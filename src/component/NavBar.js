import React from 'react'
import './NavBar.css'

function Navbar() {
  return (
    <div className='NavBar'>
        <ul>
            <a href='/'><li className='yt-li'><b>Youtube</b></li></a>
            <a href='/'><li>Home</li></a>
            <a href='/about'><li>About</li></a>
        </ul>
    </div>
  )
}

export default Navbar