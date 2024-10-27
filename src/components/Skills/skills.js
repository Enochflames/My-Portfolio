import React from 'react';
import "./skills.css";
import UIDesign from "../../assets/ui-removebg-preview.png";
import WebDesign from "../../assets/web_design-removebg-preview.png";
import AppDesign from "../../assets/Appdesign-removebg-preview.png";


const Skills = () => {
  return (
    <section id="skills">
      <span className='skillTitle'>Skills</span>
      <span className="skillDesc">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</span>
     <div className="skillBars">
      <div className="skillBar">
        
        <div className="skillBarText">
          <h2>UI/UX Design</h2>
          <p>I excel in UI/UX design, crafting intuitive interfaces; skilled in web development, creating responsive websites; and adept in creative writing, producing engaging, high-quality content for diverse audiences.</p>
        </div>
      </div>
      <div className="skillBar">
        <div className="skillBarText">
          <h2>Website Development</h2>
          <p>I specialize in web development, building responsive, user-friendly websites with a focus on clean code, optimized performance, and seamless user experience across various platforms and devices.</p>
        </div>
      </div>
      <div className="skillBar">
        <div className="skillBarText">
          <h2>Creative Writing</h2>
          <p>I bring creativity to life through compelling narratives, adapting tone and style to engage audiences effectively, and delivering impactful, well-crafted content across diverse subjects and formats.</p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Skills