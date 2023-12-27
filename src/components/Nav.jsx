import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const[show, handleShow] =useState(false);
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
              handleShow(true);
            } else {
              handleShow(false);
            }
          };
          window.addEventListener('scroll', handleScroll);

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []); 

    /*useEffect(()=>{
        console.log(show);
        return handleShow;
    },[show]);*/

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo"/>
        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix avatar"/> 
    </div>
  )
}

export default Nav;