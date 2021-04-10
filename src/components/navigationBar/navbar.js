import React, { Fragment, useState } from 'react';

//import for logo
import logo from '../../style/images/zillow-bg.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaTimesCircle} from "react-icons/fa";


export default function NavBar() {
    const handleClickOpen = () => {
        const hamburger = document.getElementById('hamburger');
        if(hamburger.classList.has('menu')){
            hamburger.classList.remove('menu') 
    } else {
        hamburger.classList.add('menu')

    }
}
  
   return(
    <Fragment>
        <nav className="nav-container">
            <div className="wrapper">
                <div className="left-side">
                        <img src={logo} alt="zwillow"/>
                </div>
             
                        
                </div>      
                  </nav>
    </Fragment>
   )
}
