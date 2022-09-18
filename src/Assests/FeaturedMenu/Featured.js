import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShopCard from "../Card/ShopCard";
import "./FeaturedMenu.css";
import productData from "../Data/featuredProductData";
import { useSelector } from "react-redux";
import { getProductData } from "../../all_feature/productSlice";

function Featured() {
  const featuredData = useSelector(getProductData);
  // console.log(featuredData);
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="Featured-group">
            {Object.keys(featuredData.featuredData).map((val, id) => {
              return (
                <ShopCard
                  key={id}
                  img={productData.featuredData[val].img}
                  title={productData.featuredData[val].title}
                  price={productData.featuredData[val].price}
                  catogery={productData.featuredData[val].catogery}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Featured;
