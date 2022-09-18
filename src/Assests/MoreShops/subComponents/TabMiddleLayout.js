import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShopCard from '../../Card/ShopCard'


const TabMiddleLayout = (props) => {
  
 
    return (
        <>
            <Container>
                <Row style={{height:'max-content', background:'#f1f1f1'}}>
                    {/* left section */}
                    <Col  md={{span:3}}   className="p-2 TabMiddle___1" style={{display:"grid", gridTemplateRows:"auto", gridRowGap:"15px"}}> 
                        {
                            props.data[0].map((val, id)=> <div key={id} ><ShopCard catogery={val.catogery} title={val.title} img={val.img} price={val.price}  /></div>) 
                        }
                    </Col>
                    <Col md={{span:6}}  className="p-2 TabMiddle___2"> 
                        {
                            props.data[1].map((val, id) =>  <ShopCard  key={id} catogery={val.catogery} title={val.title} img={val.img} price={val.price}  />  )
                        }
                    </Col>
                    <Col md={{span:3}}    className="p-2 TabMiddle___3" style={{display:"grid", gridTemplateRows:"auto", gridRowGap:"15px"}}> 
                        {
                            props.data[2].map((val, id) => <div key={id}><ShopCard  catogery={val.catogery} title={val.title} img={val.img} price={val.price}  /></div> )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TabMiddleLayout
