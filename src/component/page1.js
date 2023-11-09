import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Page1() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="page1 parallax-container">
      <div className="left" >
        {" "}
        <h1 className="animate__animated animate__slideInLeft name">
          Hi! I am Sachin
        </h1>
        <h2 className="animate__animated animate__slideInLeft occ">
          A Professional Frontend Developer based in Pune.
        </h2>
      </div>

      <div className="img">
        <img
          className="hi"
          src="https://i.ibb.co/PgxS1LV/laptop-wave.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Page1;
