import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Page2() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="page2">
      <div className="top" data-aos="fade-up">
        <h2>About Me</h2>
      </div>
      <div className="p2">
        <div className="left" data-aos="fade-up,fade-down">
          <img
            data-aos="fade-up"
            className="sachin"
            src="https://i.ibb.co/4mtxHf0/bean-bag-chair-chill.png"
            alt=""
          />
        </div>
        <div className="right" data-aos="fade-up">
          <p className="para2" data-aos="fade-up">
            I'm Sachin Parihar, an 18-year-old BCA student at Manipal University
            Jaipur, and I'm really passionate about front-end development. As I
            delve into my studies, I find myself drawn to technologies like
            HTML, CSS, and JavaScript, which allow me to create visually
            appealing and user-friendly websites.
            <br />
            <br />
            <span className="span1" data-aos="fade-up">
              What sets me apart is my unwavering enthusiasm and fun-loving
              nature. These qualities make me not just a valuable team member
              but also infuse energy into any project or workspace I'm part of.
              I'm excited about my journey as a fresher in the tech world and
              eager to explore the vast opportunities that lie ahead.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Page2;
