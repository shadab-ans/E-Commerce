import { React } from "react";
import "../../Pages/Home/Home";
import {Container, Row, Col, Navbar, Nav, NavDropdown,OverlayTrigger, InputGroup, FormControl, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Sidebar from "./Sidebar";
import {cartIcon, userIcon, searchIcon, logo, shopDepartments, compare_cart , search, search2, showSearchBar, showSidebar, menuIcon} from './data'





// Header components ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Header() {
  return (
    <>
      <div className="Header">
        {/* top header */}
        <Container className="top-header">
          <Row className="p-2">
            <Col>
              <div id="brand-logo"> {logo} </div>
            </Col>
            <Col xs={7}>
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <span
                      className="d-flex align-items-center"
                      id="sidebar-menu-icon"
                      onClick={showSidebar}
                    >
                      {menuIcon}
                    </span>
                    {[
                      { nav: "Home", link: "/home" },
                      { nav: "Blogs", link: "/blogs" },
                      { nav: "About Us", link: "/about" },
                      { nav: "FAQs", link: "/faqs" },
                      { nav: "Contact Us", link: "/contact" },
                    ].map((value, id) => {
                      return (
                        <NavLink key={id} className="menu" to={value.link}>
                          {" "}
                          {value.nav}{" "}
                        </NavLink>
                      );
                    })}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>

            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#fed700"
                  className="bi bi-headset"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
              </div>
              <div>
                <section className="support">
                  {" "}
                  <strong>Support</strong> <br />{" "}
                  <a
                    style={{
                      fontSize: "13px",
                      textDecoration: "none",
                      color: "black",
                    }}
                    href="#phone"
                  >
                    +91 9393833782
                  </a>{" "}
                </section>
              </div>
            </Col>
          </Row>
        </Container>

        {/* bottom header */}

        <Container fluid className="header-bottom">
          <Container>
            <Row className="p-3 d-flex align-items-center">
              <Col>
                <NavDropdown
                  className="shopMoreDropdown p-0"
                  title="Shop By Department"
                  id="basic-nav-dropdown"
                >
                  {shopDepartments.map((value, id) => {
                    return (
                      <NavDropdown.Item
                        className="topbar-text"
                        key={id}
                        href={value.link}
                      >
                        {" "}
                        {value.department}{" "}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                  

              </Col>
              <Col xs={6}>
                <div id="searchbar">
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Search for products"
                    />
                  </div>
                  <div
                    onClick={search}
                    style={{
                      width: "10%",
                      height: "inherit",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "black",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="white"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                </div>
              </Col>
              <Col className="compare-cart">
                <Nav className="mr-auto float-right">
                  {compare_cart.map((value, id) => {
                    return (
                      <OverlayTrigger
                        key={id}
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={value.tooltip}
                      >
                        <NavLink to={value.link} id={value.id1}>
                          {" "}
                          {value.svg}{" "}
                          <span className={value.id2} id={value.id2}>
                            0
                          </span>{" "}
                        </NavLink>
                      </OverlayTrigger>
                    );
                  })}
                </Nav>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* sidebar */}
      <Sidebar />
        
      </div>
      {/* Mobile header */}
      <Container fluid className="mobile-header">
        <Container>
          <Row>
            <Col className="mobile-header-left">
              <span
                className="d-flex align-items-center"
                id="sidebar-menu-icon"
                onClick={showSidebar}
              >
                <svg
                  id="sidebar-menu-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>

              <span id="mobile-header-left-logo">{logo}</span>
            </Col>

            <Col className="d-flex align-items-center justify-content-between ">
              <section id="d-none"></section>
              <section
                style={{ float: "right" }}
                className="d-flex align-items-center "
              >
                <div className="mobile-header-right-search">
                  <div
                    className="mobile-header-right-search-icon"
                    onClick={showSearchBar}
                  >
                    {" "}
                    {searchIcon}{" "}
                  </div>
                </div>
                <div className="mobile-header-right-user">{userIcon}</div>
                <div className="mobile-header-right-cart">
                  {cartIcon}
                  <span className="cart-item-no" id="cart-item-no">
                    0
                  </span>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="mobile-header-right-search-input mt-1" id="searchBar">
        <InputGroup className="Input-group">
          <FormControl
            type="text"
            placeholder="Search Products"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              className="mobile-header-right-search-input-btn"
              type="submit"
              onClick={search2}
            >
              {searchIcon}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </>
  );
}
export default Header;
