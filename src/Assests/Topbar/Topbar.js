import React from "react";
import "./Topbar.css";
import { Container, Row, Col , Navbar, Nav, NavDropdown,  } from "react-bootstrap";
import {NavLink} from 'react-router-dom';


function Topbar() {
  return (
    <>
      <Container className="topbar" >
        <Row >
          <Col >
            <Navbar expand="lg">
              <Navbar.Text href="#home" className="topbar-text">Welcome to Worldwide Electronics Store</Navbar.Text>           
                <Nav className="ml-auto">
                  <NavLink className="topbar-navlink" to="/storelocator"> <span></span> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> Store Locator</span> </NavLink>
                  <NavLink className="topbar-navlink" to="/trackorder"><span></span> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>Track your order</span> </NavLink>
                  
                  <NavDropdown className="topbar-navlink-dropdown" title="Dollor(US)" id="basic-nav-dropdown">
                  
                    <NavDropdown.Item className="topbar-text"  href="#action/3.1">
                      Rupees(₹)
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topbar-text" href="#action/3.2">
                      Euro(€)
                    </NavDropdown.Item>
                    <NavDropdown.Item className="topbar-text" href="#action/3.3">
                      Dollor($)
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink className="topbar-navlink" to="/signup"><span></span> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
</svg>Resister or Sign In</span></NavLink>
                </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>

      <div className="horizontal-line"></div>
    </>
  );
}

export default Topbar;
