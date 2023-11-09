import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { Link2, Code2 } from "lucide-react";
import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function GroupExample() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="rowhandle">
      <div className="row">
        <CardGroup data-aos="fade-up">
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
              variant="top"
              src="https://i.ibb.co/4NxzD17/Screenshot-2023-10-28-102055.png"
              style={{ borderRadius: "10px 10px 0 0" }}
              data-aos="fade-up"
            />
            <Card.Body className="ml-10" data-aos="fade-up">
              <Card.Title data-aos="fade-up">XPNSR</Card.Title>
              <Card.Text data-aos="fade-up">
                XPNSR is a web application which helps you in tracking your
                daily expenses ,credits, debits and your savings.
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li data-aos="fade-up">Dom Manipulation</li>
                  <li data-aos="fade-up">Glassmorphism</li>
                </ul>
              </Card.Text>
            </Card.Body>

            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              data-aos="fade-up"
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/XPNSR/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{}
              <Button variant="success">
               <a rel="noreferrer" target="_blank" href="https://github.com/Sheenu-exe/XPNSR"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
              data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/FD5GH5D/Screenshot-2023-10-28-095024.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up">
              <Card.Title data-aos="fade-up">iWeather</Card.Title>
              <Card.Text data-aos="fade-up">
                iWeather is an app which can be used for weather report and
                climate acknowledgement <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li data-aos="fade-up">API Calling</li>
                  <li data-aos="fade-up">Responsive Design</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
              data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/iWeather/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/iWeather" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
              data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/txWjdPj/Screenshot-2023-11-01-195302.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body>
              <Card.Title data-aos="fade-up">Rock Paper Scissor</Card.Title>
              <Card.Text data-aos="fade-up">
                A Game made using pure JavaScript
                <h5 data-aos="fade-up">Learned:</h5>
                <ul>
                    <li>DOM manipulation</li>
                    <li>OOPS</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
              data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/rockpaperscissor/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/rockpaperscissor" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="row" data-aos="fade-up">
        <CardGroup data-aos="fade-up">
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
              data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/xFTJJXP/Screenshot-2023-08-02-143552.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up" className="ml-10">
              <Card.Title data-aos="fade-up">ZEST</Card.Title>
              <Card.Text data-aos="fade-up">
                ZEST is an E-Commerce app.
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li>Multi Pages App</li>
                  <li>Embedding #d Models</li>
                  <li>Heavy JavaScript</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
              data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/ZEST" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/ZEST" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
            data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/6yZprKZ/Screenshot-2023-07-03-234025.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up">
              <Card.Title data-aos="fade-up">Sign Up Page</Card.Title>
              <Card.Text data-aos="fade-up">
                A Sign Up / Login Page made using HTML,CSS & JavaScript.{" "}
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li data-aos="fade-up">DOM Manipulation</li>
                  <li data-aos="fade-up">Animation and transition</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
            data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/Sign-Up-Page/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/Sign-Up-Page" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
            data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/zfCTjdt/Screenshot-2023-05-20-173118.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            
            <Card.Body  data-aos="fade-up">
              <Card.Title data-aos="fade-up">To-do Xpress</Card.Title>
              <Card.Text data-aos="fade-up">This app is used as a To-do List Generator.
                <h5 data-aos="fade-up">Learned:</h5>
              <ul data-aos="fade-up">
                  <li data-aos="fade-up">Building CRUD app.</li>
                  <li data-aos="fade-up">Animation and transition</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
            data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/Todo-Xpress/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/Todo-Xpress" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="row" data-aos="fade-up">
        <CardGroup data-aos="fade-up">
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
              data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/hgP9fN5/IMG-20230705-WA0023.jpg"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up" className="ml-10">
              <Card.Title data-aos="fade-up">Touchwood Cafe</Card.Title>
              <Card.Text data-aos="fade-up">
                A Cafe Landing Page
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li>FlexBox</li>
                  <li>Marquee</li>
                  <li>Heavy CSS</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
              data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
             <Button variant="success">
                <a href="https://sheenu-exe.github.io/Touchwood-Cafe/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/Touchwood-Cafe" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
            data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/FWDW0Ry/Screenshot-2023-11-02-102404.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up">
              <Card.Title data-aos="fade-up">AirPod Max Page</Card.Title>
              <Card.Text data-aos="fade-up">
                A Landing Page for Apple Airpod Max.{" "}
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li data-aos="fade-up">BorderBox</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
            data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/AirPods-Max/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/AirPods-Max" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
            data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/M6tLxPJ/Screenshot-2023-11-02-103359.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up">
              <Card.Title data-aos="fade-up">Silver Embrace</Card.Title>
              <Card.Text data-aos="fade-up">An Landing Page made for society.
                <h5 data-aos="fade-up">Learned:</h5>
              <ul data-aos="fade-up">
                  <li data-aos="fade-up">Flexbox</li>
                  <li data-aos="fade-up">Alignments</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
            data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/SilverEmbrace/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/SilverEmbrace" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div className="row" data-aos="fade-up">
        <CardGroup data-aos="fade-up">
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
              data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/9hqgTNZ/Screenshot-2023-10-28-094843.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up" className="ml-10">
              <Card.Title data-aos="fade-up">Old Portfolio</Card.Title>
              <Card.Text data-aos="fade-up">
                My old Portfolio made using HTML,CSS & JavaScript.
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li>Flexbox</li>
                  <li>Page Structure</li>
                  <li>DOM Manipulation</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
              data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/portfolio/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/portfolio" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card
            style={{ margin: "10px", borderRadius: "10px" }}
            data-aos="fade-up"
          >
            <Card.Img
            data-aos="fade-up"
              variant="top"
              src="https://i.ibb.co/7215G87/Screenshot-2023-08-05-100552.png"
              style={{ borderRadius: "10px 10px 0 0" }}
            />
            <Card.Body data-aos="fade-up">
              <Card.Title data-aos="fade-up">Dashboard</Card.Title>
              <Card.Text data-aos="fade-up">
                A Dashboard made using HTML & CSS.{" "}
                <h5 data-aos="fade-up">Learned:</h5>
                <ul data-aos="fade-up">
                  <li data-aos="fade-up">Flexbox</li>
                  <li>SideBar alignment</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer
            data-aos="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="success">
                <a href="https://sheenu-exe.github.io/Dashboard/" rel="noreferrer" target="_blank">Link <Link2 /></a>
              </Button>{" "}
              <Button variant="success">
                <a href="https://github.com/Sheenu-exe/Dashboa" rel="noreferrer" target="_blank"> Source Code
                <Code2 /></a>
              </Button>{" "}
            </Card.Footer>
          </Card>
        
        </CardGroup>
      </div>
    </div>
  );
}

export default GroupExample;
