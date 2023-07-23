import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear("token");
    navigate("/");
  };
  return (
    <>
      <Navbar style={{ backgroundColor: "rgb(12 16 99)" }} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "white" }}>
            Logo
          </Navbar.Brand>
          <Link className="text-white mx-3" to={'/home'} style={{}}>Home</Link>
          <Link className="text-white" to={'/customer'} style={{"marginRight":"80%"}}>Customer</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Button variant="danger" onClick={handleLogout}>
                LogOut
              </Button>
            </Navbar.Collapse>
          {/* <div style={{ display: "flex", marginRight: "3rem" }}>
           
          </div> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
