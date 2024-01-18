import React from "react";

const Navbar = (styles) =>{
 return(
    <header class="header" > 
        <a href="blank" class="logo">Kaczor.
        <span class="animate"  style={styles.style[0]}></span> </a>
        <div class="bx bx-menu" id="menu-icon"  >
            <span class="animate" style={styles.style[1]} ></span> 
        </div>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#carousel">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <span class="active-nav"></span>
            <span class="animate-logo" style={styles.style[1]}></span> 
        </nav>
    </header>
 )   
}

export default Navbar