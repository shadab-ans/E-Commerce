import React from 'react'
import { Button, Container, Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCarouselData } from '../../all_feature/carouselSlice';
import "../../Pages/Home/Home.css";

const MyCarousel = () => {
    const carouselData = useSelector(getCarouselData);
    


    return (
        <div
        style={{
          background: "rgba(201, 201, 201, 0.123)",
          height: "max-content",
        }}
      >
        <Container>
          <Carousel className="Carousel">
            {carouselData.data.map((value, id) => {
              return (
                <Carousel.Item key={id} className="Carousel-item">
                  <img className="d-block" src={value.img} alt="First slide" />
                  <Carousel.Caption className="Carousel-item-text">
                    <h3>{value.h3}</h3>
                    <p>{value.p}</p>

                    <Button className="Carousel-item-text-btn hvr-sweep-to-right">
                      {value.btn}
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </div>
    )
}

export default MyCarousel
