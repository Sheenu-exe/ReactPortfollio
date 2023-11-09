import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Page5() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="Page5">
      <div className="top5" data-aos="fade-up">
        <h1 data-aos="fade-up">Contact</h1>
      </div>
      <div className="bottom5" data-aos="fade-up">
        <div className="left" data-aos="fade-up">
          <h1  className="enquiry">Enquiry</h1>
          <form
            method="POST"
            action="https://formsubmit.co/pariharsachin5002@gmail.com"
            data-aos="fade-up"
          >
            <label data-aos="fade-up" style={{margin:0}} for="email">Email</label>
            <input data-aos="fade-up" type="email" name="email" placeholder="Your email" />
            <label data-aos="fade-up" style={{margin:0}} for="message">Message</label>
            <textarea
              name="message"
              placeholder="message"
              defaultValue={""}
              data-aos="fade-up"
            />
            <input
              type="file"
              name="attachment"
              data-aos="fade-up"
            />
            <button data-aos="fade-up" type="submit">Send Enquiry</button>
          </form>
        </div>

        <div className="right" data-aos="fade-up">
          <div
            data-aos="fade-up"
            style={{
              textDecoration: "none",
              overflow: "hidden",
              maxWidth: "100%",
              width: "500px",
              height: "500px",
            }}
          >
            <div
              id="gmap-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                title="map"
                style={{ height: "100%", width: "100%", border: 0 }}
                frameBorder={0}
                src="https://www.google.com/maps/embed/v1/place?q=Kalewadi+-+Rahatani+Road,+Ram+Nagar,+Rahatani,+Pimpri-Chinchwad,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <a
              className="googlemaps-made"
              rel="nofollow"
              href="https://www.bootstrapskins.com/themes"
              id="authorize-maps-data"
            >
              premium bootstrap themes
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "#gmap-canvas img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
