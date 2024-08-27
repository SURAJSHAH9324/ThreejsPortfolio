import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
// import logo from "../../images/logo.png";
import me from "../../images/me.jpeg";
// import me from "../../images/mein.jpg";
import {FaUserAlt} from "react-icons/fa"
function Header() {
  return <ReactNavbar 
        navColor1="white"
        navColor2 = "hsl(219,48%,8%)"
        burgerColor="hsl(250,100%,75%)"
        burgerColorHover="hsl(250,100%,75%)"
        nav2justifyContent="space-evenly"
        logo={me}
        logoWidth="inherint"
        nav3justifyContent="space-around"
        link1Text ="Home"
        link2Text ="about"
        link3Text ="Projects"
        link4Text ="Contacts"
        link1Url ="/"
        link2Url ="/about"
        link3Url ="/projects"
        link4Url ="/contact"
        link1ColorHover ="white"
        link1Color ="hsl(250,100%,75%)"
        link1Size ="1.5rem"
        link1padding ="3vmax"
     />
}

export default Header