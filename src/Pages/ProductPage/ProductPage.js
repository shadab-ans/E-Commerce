import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {getRecentlyData} from '../../all_feature/recentlySlice'
import DescriptionBox from '../../Assests/DescripitonBox/DescriptionBox'
import './ProductPage.css'
import Home from "../Home/Home"

const star = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>;

const ProductPage = () => {
    const data = useSelector(getRecentlyData);
    const productData = data[data.length - 1];
    
    
    if(productData){
        return (
            <>
                <h2 className="mt-2 text-center" style={{fontSize:'35px'}}>  <span style={{color:'#fed700'}}>Product</span> Details</h2>
                <Container className="productDetail__card mt-3">
                    <Row style={{display:'flex', justifyContent:'space-between'}}>
                        <Col md={4} className="productDetail__card__img">
                            <img width="100%" src={productData.image} alt="..."/>
                        </Col>
                        <Col md={7} className="productDetail__card__details">
                            <p className="text-left text-capitalize"> {productData.catogery } </p>
                            <h3 className="text-left"> {productData.title} </h3>
                            <div className="productDetail__card__details--rating" >  <span style={{color:'#fed700'}}> {star} {star} {star} {star} </span> {star}  <span style={{marginLeft:'10px', fontFamily:"'Open Sans', sans-serif", fontSize:'13px'}}>(3 customer reviews)</span> </div>
                            <div className="productDetail__card__details--available"> <span style={{fontSize:'13px'}}> Availabile: </span>  <span style={{fontFamily:"'Roboto', sans-serif", color:'green', fontSize:'13px'}}> 26 in stock </span> </div>
                            <ol style={{listStyle:'disc', marginLeft:'20px'}}>
                                <li>1.4 GHz Quad Core™ Processor</li>
                                <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
                                <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
                                <li>Android 4.4 KitKat OS</li>
                            </ol>
                            <p style={{color:'red'}}>${productData.price}</p>
                            <hr/>
                            <div className="productDetail__card__details--quantity">
                                <p>Quantity</p>
                                <section>
                                    <input type="number"/>
                                    <Button id="btn" variant="warning">Add to Cart</Button>
                                </section>
                            </div>
                            
                        </Col>
                        
                    </Row>
                    <DescriptionBox />
                    <NavLink to="/home"><Button className="mt-3 go__back" variant="dark"  >Go Home</Button></NavLink>
                </Container>
            </>
        )
    }
    else{
        return(
            <Home />
        )
    }
}

export default ProductPage
