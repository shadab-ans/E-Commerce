import React,{useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { setTotalAmount } from "../../all_feature/totalAmountSlice";
import {useDispatch} from "react-redux"
import "./Cart.css";

const CartCards = ({props}) => {
    const dispatch = useDispatch();

    var[thisPrice, setThisPrice] = useState([]);
    const getInput = (e, id) => {
    isNaN(thisPrice) ? setThisPrice(''): setThisPrice(e.target.value)
  }

  
 const dispatchTotal = () => {
    dispatch(setTotalAmount({
        total: props.price*thisPrice
    }));
 }
    return (
        <>
              <Row className="Cart-row" key={props.id} >
                <Col md={3} className="Cart-row-center"> <img width="100%" src={props.image} alt=""/> </Col>
                <Col md={3} className="Cart-row-center-title"> <div>{props.title} </div> <br/> <div style={{color:'red'}} > <strong>${props.price}</strong> </div> </Col>
                <Col md={3} className="Cart-row-center Input"> 
            
                     <input placeholder="quantity" type="text" value={thisPrice} onChange={(e, id)=>getInput(e, id)} /> <Button variant="success" onClick={dispatchTotal}> Confirm </Button>
            
                </Col>
                <Col md={3} className="Cart-row-center"  > Price =  <strong style={{color:'red', marginLeft:'20px'}}>${props.price*thisPrice}</strong> </Col>
            </Row>
        </>
    )
}

export default CartCards
