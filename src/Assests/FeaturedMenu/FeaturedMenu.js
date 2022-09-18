import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Featured from "./Featured";
import Onsale from "./Onsale";
import "./FeaturedMenu.css";

const imgSrcData = [
  {
    eventKey: "featured",
    title: "Featured",
    component: <Featured />,
  },
  {
    eventKey: "onsale",
    title: "On Sale", 
    component: 
   <Onsale /> 
 },
  { eventKey: "toprated", title: "Top Rated", component: <Featured /> },
];

function FeaturedMenu() {
  return (
    <>
      <div className="mt-1 FeaturedMenu ">
        <Tabs
          defaultActiveKey="featured"
          transition={false}
          id="noanim-tab-example"
        >
          {imgSrcData.map((val, id) => {
            return (
              <Tab key={id} eventKey={val.eventKey} title={val.title}>
                {val.component}
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
}

export default FeaturedMenu;
