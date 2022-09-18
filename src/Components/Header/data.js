import {Tooltip} from "react-bootstrap"

const compare = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Compare
    </Tooltip>
  );
  
  
  
  const cart = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Cart
    </Tooltip>
  );
// Const that will be used in Header Component ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-cart"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
  
  export const userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-person"
      viewBox="0 0 16 16"
    >
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    </svg>
  );
  
  export const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
  
  export const logo = (
    <div className="LogoNew">
        <h2>Shopper</h2>
        <span>Square</span>
    </div>
  );
  
  
  export const shopDepartments = [
    {
      department: "Value of the Day",
      link: "#valueOfTheDay",
    },
    {
      department: "Top 100 Offers",
      link: "#top100Offers",
    },
    {
      department: "New Arrivals",
      link: "#newArrivals",
    },
    {
      department: "Computers & Assessories",
      link: "#computers&assessories",
    },
    {
      department: "Cameras, Audio & Video",
      link: "#cameras&audio&video",
    },
    {
      department: "Mobile & Tablets",
      link: "#mobile&tablets",
    },
    {
      department: "Movies, Music & Video",
      link: "#movies&music&video",
    },
    {
      department: "TV & Audio",
      link: "#tv&audio",
    },
    {
      department: "Watches & Eyewear",
      link: "#wathches",
    },
    {
      department: "Car & Motorbike",
      link: "#car",
    },
    {
      department: "Accessories",
      link: "#accessories",
    },
  ];


  export const compare_cart = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-input-cursor"
          viewBox="0 0 16 16"
        >
          <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z" />
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1z"
          />
        </svg>
      ),
      link: "/compare",
      tooltip: compare,
      id1: "dumm1",
      id2: "dummy2",
    },
  
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      ),
      link: "/cart",
      tooltip: cart,
      id1: "Cart",
      id2: "cart-item-no-1",
    },
  ];
  
  export const menuIcon = <svg
  id="sidebar-menu-icon-svg"
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  fill="currentColor"
  className="bi bi-list"
  viewBox="0 0 16 16"
>
  <path
    fillRule="evenodd"
    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
  />
</svg>;

//   functions

 export  const showSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-150%") {
      sidebar.style.left = "0%";
    } else {
      sidebar.style.left = "-150%";
    }
  };
  
   export  const search = () => {
    var input = document.getElementById("search-input").value;
  
    if (input) {
      window.alert("You have searched " + input);
    }
  };
  
   export  const search2 = () => {
    var input = document.getElementsByTagName("input").value;
    console.log("ssaas");
    if (input) {
      window.alert("You have searched " + input);
    } else {
      window.alert("Null");
    }
  };
  
  // search bar toggle function
   export  const showSearchBar = () => {
    var searchbar = document.getElementById("searchBar");
    if (searchbar.style.display === "none") {
      searchbar.style.display = "block";
    } else {
      searchbar.style.display = "none";
    }
  };