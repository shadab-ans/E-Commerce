import React from "react";
// import { Add, Add2 } from "../../Components/Header/Header";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../Assests/Hover-master/css/hover.css";
import SpecialOffer from "../../Assests/SpecialOffer/SpecialOffer";
import FeaturedMenu from "../../Assests/FeaturedMenu/FeaturedMenu";
// import BestOffer from "../../Assests/BestOffer/BestOffer";
import Ads from "../../Assests/Ads/Ads";
import RecentlyViewed from "../../Assests/RecentlyViewed/RecentlyViewed";
import Subscribe from "../../Assests/Subscribe/Subscribe";
import MoreShop from "../../Assests/MoreShops/MoreShop";
import MyCarousel from "../../Assests/Carousel/Carousel";
import OfferCard from "../../Assests/OfferCard/OfferCard";


function Home() {

  return (
    <div>
     

      {/* carousel */}
      <MyCarousel />
      {/* cards */}
      <OfferCard />

      {/* Container Feature */}
      <Container className="mt-4" style={{ height: "max-content" }}>
        <Row>
          <Col md={4}>
            <SpecialOffer clockTime="Oct 2, 2022 15:37:25" />
          </Col>
          <Col md={8}>
            <FeaturedMenu />
          </Col>
        </Row>
      </Container>

      {/* more shop */}
      <Container className="mt-4">
        <Row>
          <Col>
            <MoreShop />
          </Col>
        </Row>
      </Container>

      {/* Ads */}
      <Ads />

      {/* Recently viewed */}
      <RecentlyViewed />

      {/* subscribe component */}
      <Subscribe />
    </div>
  );
}

export default Home;
