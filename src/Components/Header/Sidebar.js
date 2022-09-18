import React from 'react'
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import sidebar_img from "../../image/sidebar/sidebar-bottom.png";
import {logo} from './data'


const leftArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-right-short"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
      />
    </svg>
  );
  
const Sidebar = () => {
    // Function to show and hide ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const showSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-150%") {
      sidebar.style.left = "0%";
    } else {
      sidebar.style.left = "-150%";
    }
  };

    return (
        <>
            <div className="sidebar" id="sidebar">
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div id="sidebar-logo"> {logo} </div>
            <div>
              {" "}
              <svg
                onClick={showSidebar}
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>{" "}
            </div>
          </section>
          <section className="sidebar-content">
            <Nav
              className="mx-auto"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {[
                { nav: "Home", link: "/home" },

                { nav: "Blogs", link: "/blogs" },
                { nav: "About Us", link: "/about" },
                { nav: "FAQs", link: "/faqs" },
                { nav: "Contact Us", link: "/contact" },
                { nav: "Compare", link: "/compare" },
                { nav: "Cart", link: "/cart" },
                { nav: "Store Locator", link: "/storelocator" },
                { nav: "Track your order", link: "/trackorder" },
                { nav: "Register or Sign In", link: "/signup" },
              ].map((value, id) => {
                return (
                 
                    <div className="" key={id}>
                      <NavLink  className="menu" to={value.link}>
                        {" "}
                        {value.nav}{" "}
                      </NavLink>
                      {leftArrow}
                    </div>
                
                );
              })}
            </Nav>
          </section>

          <div
            id="sidebar-bottom-img"
            style={{
              position: "absolute",
              bottom: "0%",
              left: "0%",
              width: "100%",
            }}>
            <img width="100%" src={sidebar_img} alt="" />
          </div>
        </div>
         
        </>
    )
}

export default Sidebar
