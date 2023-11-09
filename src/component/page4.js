import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import GroupExample from "./card";


export default function Page4() {
  
  
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="page4 ">
      <div className="top4">
        <h1 data-aos="fade-up">Projects</h1>
      </div>
      <div className="proj">
     <GroupExample/>

  
        </div>
      </div>
      
  
  );
}
