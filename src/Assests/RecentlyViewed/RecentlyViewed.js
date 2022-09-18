import React from "react";
import { Container } from "react-bootstrap";
import "./RecentlyViewed.css";
import { useSelector } from "react-redux";
import { getRecentlyData } from "../../all_feature/recentlySlice";
import RecentlyCard from "../Card/RecentlyCard";

function RecentlyViewed() {
  const recentlyData = useSelector(getRecentlyData);
  var arrayData = [];
  const Slice = (array, i) => array.slice(Math.max(recentlyData.length - i , -1));
  var len = recentlyData.length;
    switch(len){
      case 1:
        arrayData = Slice(recentlyData, 1);
        break;
      case 2:
        arrayData = Slice(recentlyData, 2);
        break;
      case 3:
        arrayData = Slice(recentlyData, 3);
        break;
      case 4:
        arrayData = Slice(recentlyData, 4);
        break;
      default:
        arrayData = Slice(recentlyData, 5);
    }
    return (
      <>
        <Container className="mt-3 RecentlyViewed" >
          <h2>Recently Viewed</h2>
          <hr />
          
          <section id="RecentlyViewed-section">
            {arrayData.reverse().map((val, id) => (
              <RecentlyCard
                key={id}
                cat={val.catogery}
                title={val.title}
                imgSrc={val.image}
                price={val.price}
                rating={val.rating}
              />
            ))}
          </section>
        </Container> 
      </>
    );
  
}

export default RecentlyViewed;
