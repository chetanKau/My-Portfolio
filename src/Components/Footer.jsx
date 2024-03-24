import React from 'react'
import { ImGithub } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import "./Footer.css"
function Footer() {
   
  return (
    <>
   <br /><hr style={{border:"none", height:"1px", backgroundColor:"gray"}}/><br /><br />
    <div className="footer" style={{width:"100%", height:"30px",}}>
        <ul style={{display:"flex", listStyle:"none", justifyContent:"center", gap:"5%"}}>
            <li ><a href="https://github.com/chetanKau"><ImGithub /></a></li>
            <li  ><BsInstagram/></li>
            <li  ><a href="https://www.linkedin.com/in/chetan-kaushik-198317161/"><BsLinkedin /></a></li>
            <li  ><BsTwitter /></li>
            <li  ><a href="https://mail.google.com/mail/u/0/?tab=rm#inbox"><HiMail /></a></li>
        </ul>
    </div>
    <br /><br />
    </>
  )
}

export default Footer