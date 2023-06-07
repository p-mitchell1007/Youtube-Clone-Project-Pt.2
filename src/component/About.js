import React from 'react'
import "./About.css"
import Steve_Irwin from "../Images/Steve_Irwin.jpg"
import cr7 from "../Images/cr7.webp"
import phil from "../Images/philip_driver.jpeg"
import jerry_mouse from "../Images/jerry-mouse.png"

function About() {
  return (
    <div className="about-container">
      <p className='about-description'>Create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.</p>
       <h3>Teammates</h3>
     <ul className='teammates'>
       <li className='teammate'>
          <img className='avatar' src={cr7} alt='picture-of-cristian'></img>
          <br></br>
          <br></br>
          <h4>Cristian</h4>
         <p>Fullstack Web Developer - Looking to change the world as a software engineer.</p>
          <a href="https://github.com/crsvalle">Teammate 1's GitHub</a>
      </li>
      <li className='teammate'>
        <img className='avatar' src={Steve_Irwin} alt='picture-of-irwin'></img>
         <br></br>
         <br></br>
         <h4>Irwin</h4>
         <p>A passionate FSW dev in NYC</p>
           <a href="https://github.com/Irwinj7">Teammate 2's GitHub</a>
      </li>
      <li className='teammate'>
         <img className='avatar' src={jerry_mouse} alt='picture-of-jerry'></img>
         <br></br>
         <br></br>
         <h4>Jerry</h4>
         <p>Hello! I am currently in a course called Pursuit, studying full stack development. In my spare time, I love to watch anime and play metal music.</p>
           <a href="https://github.com/imjerryjohn">Teammate 3's GitHub</a>
      </li> 
      <li className='teammate'>
         <img className='avatar' src={phil} alt='picture-of-phil'></img>
         <br></br>
         <br></br>
         <h4>Phillip</h4>
         <p>Full Stack Developer currently going through the modules of Pursuit. Passionate about elevating my career in tech and providing for my family.</p>
           <a href="https://github.com/p-mitchell1007">Teammate 4's GitHub</a>
      </li> 
    </ul>
    </div>
  )
}

export default About