import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { setRecently } from "../../all_feature/recentlySlice";
import { NavLink } from "react-router-dom";
import { setCartList } from "../../all_feature/addCartSlice"
import "../../Assests/Hover-master/css/hover.css";


// const addToCart = () => Add();

function ShopCard(props) {
  const dispatch = useDispatch();
  var i = -1;
  const addRecently = () => {
    i++;
    dispatch(
      setRecently({
        catogery: props.catogery,
        title: props.title,
        image: props.img,
        price: props.price,
        id: i,
      })
    );
  };
 const addToCart = () => {
   i++;
   dispatch(
     setCartList({
      catogery: props.catogery,
      title: props.title,
      image: props.img,
      price: props.price,
      id: i,
     })
   );
 };

  return (
    <>
      <div className="ShopCard" onClick={addRecently} >
      <NavLink to="/productpage" style={{textDecoration:'none'}}>
        <span id="ShopCard-catogery">{props.catogery}</span>
        <p > {props.title} </p>
        <div className="ShopCard-img mb-1">
          <img width="100%" src={props.img} alt="" />
        </div>
      </NavLink>
        <div className="ShopCard-bottom">
          <span id="ShopCard-price">$ {props.price} </span>
         <button id="ShopCard-bottom-btn" className="hvr2-sweep-to-right" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ShopCard;
