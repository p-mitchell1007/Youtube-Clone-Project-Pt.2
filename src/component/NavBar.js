import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='NavBar'>
      <ul>
        <a href='/'><li className='yt-li'><strong>Youtube</strong></li></a>
        <a href='/'><li>Home</li></a>
        <a href='/about'><li>About</li></a>
      </ul>
    </div>
  )
}

export default NavBar