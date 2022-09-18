import Home from "../../Pages/Home/Home.js";
import About from "../../Pages/About/About";
import StoreLocator from "../../Pages/StoreLocator/StoreLocator.js";
import OrderTrack from "../../Pages/OrderTrack/OrderTrack.js";
import Signup from "../../Pages/Signup/Signup.js";
import Pages from "../../Pages/Pages/Pages";
import Blogs from "../../Pages/Blogs/Blogs";
import FAQs from "../../Pages/FAQs/FAQs";
import Contact from "../../Pages/Contact/Contact";
import Compare from "../../Pages/Compare/Compare";
import Cart from "../../Pages/Cart/Cart";
import Favorite from "../../Pages/Favorite/Favorite";
import Login from "../../Authentication/Login";
import ProductPage from "../../Pages/ProductPage/ProductPage";

export const componentList = [
    {
      component: Home,
      link: "/home",
    },
    {
      component: About,
      link: "/about",
    },
    {
      component: Pages,
      link: "/pages",
    },
    {
      component: Blogs,
      link: "/blogs",
    },
    {
      component: FAQs,
      link: "/faqs",
    },
    {
      component: Contact,
      link: "/contact",
    },
    {
      component: StoreLocator,
      link: "/storelocator",
    },
    {
      component: OrderTrack,
      link: "/trackorder",
    },
    {
      component: Signup,
      link: "/signup",
    },
    {
      component: Compare,
      link: "/compare",
    },
    {
      component: Favorite,
      link: "/favorite",
    },
    {
      component: Cart,
      link: "/cart",
    },
    {
      component: ProductPage,
      link: "/productpage",
    },
    {
      component: Login,
      link: "/login",
    },
  ];