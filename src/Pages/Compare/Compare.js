import React from "react";
import { Container, Table } from "react-bootstrap";
import CompareCard from "./CompareCard";
import './Compare.css';

function Compare() {
  return (
    <>
      <Container>
        <Table striped bordered hover size="sm" className="Compare-Table mt-3">
          <thead>
            <tr>
              <th >Product</th>
              {/* <td> <CompareCard imgSrc="https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img6.jpg" /> </td> */}
              {/* <td> <CompareCard imgSrc="https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img6.jpg" /> </td> */}
              <td> <CompareCard imgSrc="https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img6.jpg" /> </td>
              <td> <CompareCard imgSrc="https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img6.jpg" /> </td>
            </tr>
            <tr>
                <th> Price </th>
                <td> $400 </td>
                <td> $400 </td>
            </tr>
            <tr>
                <th> Availablity </th>
                <td> Only one left! Hurry </td>
                <td> 100 In Stock</td>
            </tr>
            <tr>
                <th> Description </th>
                 <td>
                <ul>
                    <li>Pair and Play with your Bluetooth® device with 30' range</li>
                    <li>Intel Iris Graphics 6100 (13-inch model)</li>
                    <li>12 hour rechargeable battery with Fuel Gauge</li>
                    <li>Up to 10 hours of battery life2 (13-inch model)</li>
                    <li>Force Touch trackpad (13-inch model)</li>
                </ul>
                 </td>
                 <td>
                <ul>
                    <li>Intel Core i5 processors (13-inch model)</li>
                    <li>Intel Iris Graphics 6100 (13-inch model)</li>
                    <li>Flash storage</li>
                    <li>Up to 10 hours of battery life2 (13-inch model)</li>
                    <li>Force Touch trackpad (13-inch model)</li>
                </ul>
                 </td>
            </tr>
          </thead>
        </Table>
      </Container>
    </>
  );
}

export default Compare;
