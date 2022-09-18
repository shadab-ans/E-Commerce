import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TabMiddleLayout from "./subComponents/TabMiddleLayout";
import "./MoreShops.css";
import {getFashionData} from '../../all_feature/fashionSlice'
import {useSelector} from 'react-redux'

function MoreShop() {
  const [key, setKey] = useState("coronaAccessories");
  const data = useSelector(getFashionData)

  return (
    <>
      <div className="Tabs_Menu">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          {/* <Tab eventKey="fashion" title="Fashion">
            <TabMiddleLayout data={data.data.fashion}  />
          </Tab>
          <Tab eventKey="men" title="Men">
            <TabMiddleLayout data={data.data.men}  />
          </Tab> */}
          <Tab eventKey="kids" title="Kids">
            <TabMiddleLayout data={data.data.kids}  />
          </Tab>
          {/* <Tab eventKey="ladies" title="Ladies">
            <TabMiddleLayout data={data.data.ladies}  />
          </Tab> */}
          <Tab eventKey="coronaAccessories" title="Corona Accessories">
            <TabMiddleLayout data={data.data.corona}  />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default MoreShop;
