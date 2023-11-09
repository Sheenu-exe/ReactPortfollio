import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Instagram , Github,Twitter,Linkedin} from "lucide-react"
    
export default function Footer(){
    useEffect(() => {
        AOS.init({});
      }, []);
    return(
        <div className="footer" >
            <p  className="copyr" data-aos="fade-up">Copyright © 2023. All rights reserved.</p>
            <ul className="ftul" data-aos="fade-up"> 
                <li><a href="https://github.com/Sheenu-exe"><Github color="#ffffc7" style={{margin:'20px'}} width={60} height={60}/></a></li>
                <li><a href="https://twitter.com/Sheenu_exe?t=_Q2MizbDYV2oBbJ6eqNKiA&s=08"><Twitter color="#ffffc7" style={{margin:'20px'}}  width={60} height={60}/></a></li>
                </ul>
                <ul className="ftul">
                <li><a href="https://www.instagram.com/sheenu.exe/"><Instagram color="#ffffc7"  style={{margin:'20px'}} width={60} height={60}/></a></li>
                <li><a href="https://www.linkedin.com/in/sachin-parihar-008180264"><Linkedin color="#ffffc7" style={{margin:'20px'}}  width={60} height={60} /></a></li>
            </ul>
            </div>
    )
}