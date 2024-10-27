import React from 'react';
import "./intro.css"
import bg from "../../assets/enoch.jpg"
import btnImg from "../../assets/hire.png"

const intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className="introText">I'm<span className='introName'> Enoch Obaloluwa</span><br />Frontend developer</span>
       <p className="introPara">I am a frontend developer from Lagos, Nigeria with 2 years of experience <br />good at creating visually appealing and user-friendly websites </p>
       <a><button className="btn">Hire me</button></a>
       </div>
      
      <img src={bg} alt="" width="500px" className="bg" />
    </section>
  )
}

export default intro;