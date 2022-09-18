import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import { useSelector } from "react-redux";
import { getCartList } from "../../all_feature/addCartSlice";
import CartCards from "./CartCards";
import {getAmount} from "../../all_feature/totalAmountSlice"

function Cart() {
  const data = useSelector(getCartList);
  const amountArray = useSelector(getAmount);
  var totalPurchaseAmount = null;
  amountArray.map((item)=> totalPurchaseAmount+=item.total)
  console.log(totalPurchaseAmount)  
  
 

  if (data.length !== 0) {
    return (

      <Container>
        <Row>
          <Col>  <h2 className="Cart-h3"> Cart </h2>  </Col>
        </Row>  {  data.map((val, id)=>  <CartCards props={val} key={id} />)   }  <Row>
          <Col>
            <div className="totalPrice" style={{float:'right'}}>Your Total Purchase Amount =  <strong style={{color:'red'}} >${totalPurchaseAmount}</strong> </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  else {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h4
                style={{
                  fontSize: "80px",
                  padding: "30px",
                  textAlign: "center",
                  color: "#fed700",
                }}
              >
                {" "}
                Ooops!{" "}
                <span style={{ fontSize: "25px", color: "black" }}>
                  Your Cart is Empty
                </span>{" "}
              </h4>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Cart;
