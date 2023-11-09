import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          style={{
            color: "#A57548",
            fontFamily: "poppins",
            fontWeight: "600",
            fontSize: "25px",
            marginLeft: "20px",
          }}
          expand={expand}
          className="bg-body-transparent"
        >
          <Container fluid>
            <Navbar.Brand style={{fontFamily:'Playfair Display, serif',color:'#a57548'}} href="#">Sachin Parihar</Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
