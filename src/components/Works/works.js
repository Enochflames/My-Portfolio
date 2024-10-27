import React from 'react';
import "./works.css";
import Project1 from "../../assets/portfolioproject1.png";
import Project2 from "../../assets/portfolio2.png";
import Project3 from "../../assets/portfolio3.png";
import Project4 from "../../assets/portfolio4.png";
import Project5 from "../../assets/portfolio5.png";
import Project6 from "../../assets/portfolio6.png";

const Works = () => {
  return (
    <section id='works'>
       <h2 className="worksTitle">My Portfolio</h2>
       <span className="worksDesc">I am dedicated to meticulous detail, crafting precise, polished work. I’m eager to apply my expertise to support businesses in building a powerful <br /> online presence and reaching their objectives.</span>
    <div className="worksImgs">
        <img src={Project1} alt="" height="250px" className="worksImg" />
        <img src={Project2} alt="" height="250px" className="worksImg" />
        <img src={Project3} alt="" height="280px" className="worksImg" />
        <img src={Project4} alt="" height="280px" className="worksImg" />
        <img src={Project5} alt="" height="250px" className="worksImg" />
        <img src={Project6} alt="" height="250px" className="worksImg" />
    </div>
    <button className="workBtn">See More</button>
    </section>
  )
}

export default Works