import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Page3() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="page3 parallax-container" data-aos="fade-up">
      <div className="top3" data-aos="fade-up">
        <h1 data-aos="fade-up">Tech Stack</h1>
      </div>
      <div className="stack" data-aos="fade-up">
        <div className="row" data-aos="fade-up">
          {" "}
          <div className="box" data-aos="fade-right">
            <img src="https://i.ibb.co/4PVByXn/icons8-html-400.png" alt="" />
            <p>HTML</p>
          </div>
          <div className="box" data-aos="fade-up">
            <img src="https://i.ibb.co/WHFybgV/icons8-css3-400.png" alt="" />
            <p>CSS</p>
          </div>
          <div className="box" data-aos="fade-up">
            <img
              className="javascript"
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
              alt=""
            />
            <p>JavaScript</p>
          </div>
          <div className="box" data-aos="fade-left">
            <img src="https://i.ibb.co/c13G6rK/icons8-react-js-400.png" alt="" />
            <p>React Js</p>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="box" data-aos="fade-right">
            <img
              src="https://i.ibb.co/cg4xLgC/icons8-material-ui-480.png"
              alt=""
            />
            <p>Material UI</p>
          </div>
          <div className="box" data-aos="fade-up">
            <img src="https://i.ibb.co/19DP2rn/icons8-next-js-240.png" alt="" />
            <p>Next.Js</p>
          </div>
          <div className="box" data-aos="fade-up">
            <img
              src="https://i.ibb.co/hLG2xkS/icons8-bootstrap-logo-480.png"
              alt=""
            />
            <p>Bootstrap</p>
          </div>
          <div className="box" data-aos="fade-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2535/2535547.png"
              alt=""
            />
            <p>Responsive Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page3;
