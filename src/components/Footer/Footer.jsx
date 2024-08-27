import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <div>
        <Typography variant='h5'>
           ABOUT ME
        </Typography>
        <Typography>
            Hey , My Name is Suraj Shah,<br /> <span>I am Full Stack Devloper</span>
        </Typography>
        <Link to='/contact' className='footerContactBtn'>
            <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div className='social'>
        <Typography variant='h6'>Social Media</Typography>
        <a href="https://github.com/SURAJSHAH9324" target='black' >
            <BsGithub/>
        </a>
       
        <a href="https://www.instagram.com/surajshah9324_/" target='black' >
            <BsInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/suraj-shah-3586ab219/"  target='black'>
            <BsLinkedin/>
        </a>
      </div>
    </div>
  )
}

export default Footer;