import React, { useState } from 'react'; 
 import styled from "styled-components";
 import logo from "../assets/ehox.png";
 import contactImg from "../assets/contact.png";
 import Mobile from "../assets/mobilejpeg"
 import { link } from "react-scroll";
 
 const Navbar = () => {
   const [activeItem, setActiveItem] = useState('home');
 
   const handleItemClick = (item) => {
     setActiveItem(item);
   };
 
   return (
     <Nav id='home'>
       <img src={logo} alt="logo" className='logo' height="90px" width="100px" />
       
       <div className="desktopMenuListItems">
         {/* <a className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('intro')}>Home</a>
         <a className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('skills')}>About</a>
         <a className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleItemClick('works')}>Portfolio</a>
         <a className={activeItem === 'clients' ? 'active' : ''} onClick={() => handleItemClick('clients')}>Clients</a>
          */}
          <a className='desktopMenuListItem' onClick={() =>{
            document.getElementById('intro').scrollIntoView({behavior: 'smooth'});
          }}>Home</a>
          <a className='desktopMenuListItem' onClick={() =>{
            document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
          }}>About</a>
          <a className='desktopMenuListItem' onClick={() =>{
            document.getElementById('works').scrollIntoView({behavior: 'smooth'});
          }}>Portfolio</a>
          <a className='desktopMenuListItem' onClick={() =>{
            document.getElementById('clients').scrollIntoView({behavior: 'smooth'});
          }}>Clients</a>
       </div>
 
       <button className='desktopMenuBtn' onClick={() => {
         document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
       }}>
         Contact Me
       </button>
 
       <img src={Mobile} alt="logo" className='mobMenu' height="50px" width="50px" onClick={() => handleItemClick('contact')} />
     </Nav>
   );
 };


const Nav = styled.div`
height: 5rem;
width: 100vw;
margin: 0 ;
padding: 1rem  2rem;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
top:0;
background-color: rgba(255, 255, 255, 0.4);
z-index: 3;


.logo{
   object-fit: cover;
   height: 3rem;
   width: 4rem;
   float: left;
}

.desktopMenuListItems{
   justify-content: space-between;
   display: flex;
   width: 50%;
}

.desktopMenuListItem {
   padding-bottom: 10px;
   cursor: pointer;
}
.desktopMenuListItem:hover{
   color: black;
   border-bottom: 2px solid white;
}

.desktopMenuBtn{
   background: black;
   color: white;
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   padding:  1rem;
   border-radius: 2rem;
   cursor: pointer;
}

.desktopMenuImg{
   object-fit: cover;
   height: 1rem;
   width: 1rem;
   margin: 1rem;
   

}



.mobMenu{
   display: none;
   object-fit: cover;
   height: 1.8rem;
}

.navMenu{
   position: absolute;
   right: 2rem;
   z-index: 2;
   display: flex;
   flex-direction: column;
   padding: 0.5rem;
   border-radius: 3rem;
   min-width: 15rem;
   height: fit-content;
}

.listItem{
   color: white;
   padding: 0%.5rem 3rem;
   margin: 0%.25rem;
}

@media screen and (max-width:720px) {
   .mobMenu{
      display: flex;
   }
   .desktopMenuListItem{
      display: none;
   }
   desktopMenuBtn{
      display: flex;
   }
}

`;

const desktopMenuListItem = styled.div`
   margin: 10px;
   cursor: pointer;
   justify-content: space-between;
   position: absolute;
   display: flex;
   width: 50%;
   float: left;
`;



export default Navbar;