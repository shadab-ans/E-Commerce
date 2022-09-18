import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./DescripitionBox.css";
import SubDescription from "./subComponents/SubDescription";
import SubReview from "./subComponents/SubReview";
import SubSpecificationBox from "./subComponents/SubSpecificationBox";

const DescriptionBox = () => {
  return (
    <div className="mt-3 DescriptionBox">
      <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
        <Tab eventKey="description" title="Description">
          <SubDescription />
        </Tab>
        <Tab eventKey="specification" title="Specification">
          <SubSpecificationBox />
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <SubReview />
        </Tab>
      </Tabs>
    </div>
  );
};

export default DescriptionBox;
