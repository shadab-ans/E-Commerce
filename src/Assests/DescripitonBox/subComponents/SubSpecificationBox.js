import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import '../DescripitionBox.css'

const data = [
    {
        weight: "750g",
        dimenison: '90 x 90 x 40',
        size:'One size all',
        color: 'black and red',
        gurantee:'2 years'
    },
    {
        Brand:"Apple",
        Height: "18mm",
        Width: "20mm",
        Dimension: '20 x 20 x 30',
        Model_No: '	MF841HN/A',
        Processor: 'Intel',
        Type: 'Core i5',
        Speed: "2.9GHz",
        Ram:'8gb',
        Storage:'64gb',
        Battery:'9 hrs'

    }
]
// console.log(Object.keys(data[0]))

const SubSpecificationBox = () => {
    return (
        <>
           <Container className="Sub__description ">
               <Row className="Sub__Specs">
                   <Col >
                       <Table>
                           <tbody>
                                    {/* <h2 className="mt-5 mb-5" >General Specification</h2> */}
                                   {Object.keys(data[0]).map(key => <tr  key={key}><th> {key} </th>
                                    <td> {data[0][key]} </td>
                                   </tr>)}
                                   {/* <h2  className="mt-5 mb-5" >Technical Specifications</h2> */}
                                   {Object.keys(data[1]).map(key => <tr  key={key}><th> {key} </th>
                                    <td> {data[1][key]} </td>
                                   </tr>)}
                                    
                           </tbody>
                       </Table>
                   </Col>
               </Row>
           </Container>
        </>
    )
}

export default SubSpecificationBox
