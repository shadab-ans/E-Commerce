import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShopCard from '../Card/ShopCard'
import "./FeaturedMenu.css";
import OnsaleData from "../Data/featuredProductData";


function Onsale() {
    return (
        <div>
           <Container className="mt-2">
               <Row >
                    <Col className="Featured-group">

                         {
                              Object.keys(OnsaleData.OnsaleData).map((val, id)=>{
                                   return(
                                        
                                        <ShopCard
                                         key={id}
                                         img={OnsaleData.OnsaleData[val].img}
                                         title={OnsaleData.OnsaleData[val].title} 
                                         price={OnsaleData.OnsaleData[val].price} 
                                         catogery={OnsaleData.OnsaleData[val].catogery} 
                                          />
                                         
                                   );
                              })
                         }
                    </Col>
                    
               </Row>
           </Container>
        </div>
    )
}

export default Onsale;
