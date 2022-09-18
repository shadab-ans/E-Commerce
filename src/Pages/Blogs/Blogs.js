import React from "react";
import {  Col, Container, Row} from "react-bootstrap";
import BlogsCard from "./Blogs-card";
import "./Blogs.css";

const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>;

const cardData = [
    {
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/1500X730/img1.jpg',
        title:'Robot Wars – Post with Gallery',
        postdate:'May 02 2020',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.'
    },
    {
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/1500X730/img7.jpg',
        title:'Robot Wars – Now Closed – Post with Audio',
        postdate:'Apr 02 2020',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.'
    }
]

function Blogs() {
  return (
    <>
      <Container>
        <Row>
           {
               cardData.map((val, id)=>{
                   return(
                       <Col md={4} key={id} >
                           <Row>
                               <BlogsCard img={val.img} title={val.title} postdate={val.postdate} text={val.text}  />
                           </Row>
                       </Col>
                   )
               })
           }
          {/* Right section */}
          <Col md={4} style={{fontFamily:"'Open Sans', sans-serif"}}> 
                <h5>About Blog</h5>
                <hr/>
                <p style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero.</p>
                <h5>Categories</h5>
                <hr/>
                <ul>
                    {
                        ['Design', 'Events', 'Link & Quotes', 'News', 'Social', 'Technology', 'Audios', 'Videos'].map((val, id)=>{
                            return(
                                <li key={id} className="Blogs-list"> <span> {arrowIcon} </span>  {val} </li>
                            )
                        })
                    }
                </ul>
          </Col>
        </Row>
        <Row className="mt-4">
           {
               cardData.map((val, id)=>{
                   return(
                       <Col md={4} key={id} >
                           <Row>
                               <BlogsCard img={val.img} title={val.title} postdate={val.postdate} text={val.text}  />
                           </Row>
                       </Col>
                   )
               })
           }
          {/* Right section */}
          <Col md={4} style={{fontFamily:"'Open Sans', sans-serif"}}> 
                <h5>Tags Clouds</h5>
                <hr/>
                <div className="Blogs-list-tags-box">
                    {
                        ['Design', 'Events', 'Link & Quotes', 'News', 'Social', 'Technology', 'Audios', 'Videos'].map((val, id)=>{
                            return(
                                <div key={id} className="Blogs-list-tags">  {val} </div>
                            )
                        })
                    }
                </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blogs;
