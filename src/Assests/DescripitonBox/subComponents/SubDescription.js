import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../DescripitionBox.css'
import {useSelector} from 'react-redux'
import {getRecentlyData} from '../../../all_feature/recentlySlice'

const dataDes = [
    {
        h2:"Perfectly Done",
        p:"Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu."
    },
    {
        h2:"Wireless",
        p:"Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu."
    },
    {
        h2:"New Design",
        p:"Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu."
    },
    {
        h2:"Fabolous Sound",
        p:"Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu."
    }
]

const Sub__description = (props) => {

    const data = useSelector(getRecentlyData);
    const productData = data[data.length - 1];
    return (
        <div className="Sub__description">
             <Container className="Sub__description__container">
                 <Row>
                     <Col>
                         <h2>{dataDes[0].h2}</h2>
                         <p>{dataDes[0].p}</p>
                     </Col>
                 </Row> <Row>
                     <Col md={7}>
                         <Row>
                             <Col> <h2>{dataDes[1].h2}</h2> <p> {dataDes[1].p} </p> </Col>
                             
                         </Row>
                         <Row>
                             <Col> <h2>{dataDes[1].h2}</h2> <p> {dataDes[1].p} </p> </Col>
                             
                         </Row>
                     </Col>
                     <Col className="Sub__description-img" md={5}> <img width="100%" src={productData.image} alt=""/> </Col>
                 </Row>
             </Container>
        </div>
    )
}

export default Sub__description
