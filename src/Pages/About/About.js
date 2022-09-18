import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCard from './AboutCard'
import AboutTabs from './AboutTabs'
import ProfileCard from './ProfileCard'
import './About.css'

const data = [
    {
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/500X300/img1.jpg',
        title:'What we really do ?',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    },
    {
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/500X300/img2.jpg',
        title:'Our Vision',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    },
    {
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/500X300/img3.jpg',
        title:'History of Begnning',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    }
]

const profileData = [
    {
        name:'Thomas Snow',
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img16.jpg',
        profession:'CEO/Founder'
    },
    {
        name:'Anna Baranov',
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img17.jpg',
        profession:'Client Care'
    },
    {
        name:'Andre Kowsaly',
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img18.jpg',
        profession:'Support Boss'
    },
    {
        name:'Pamela Doe',
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img19.jpg',
        profession:'Delivery Driver'
    },
    {
        name:'Susan McCain',
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img20.jpg',
        profession:'Packaging Girl'
    },
    {
        name:'See Details',
        img:'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img21.png',
        profession:''
    }
];

const moreData = [
    {
        img:'',
        title:'What we really do ?',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    },
    {
        img:'',
        title:'Our Vision',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    }
];

const aboutTabsData = [
    {
        id: 1,
        title:'Support 24/7',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    },
    {
        id: 2,
        title:'Best Quality',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    },
    {
        id: 3,
        title:'Fastest Delivery',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    },
    {
        id: 4,
        title:'Customer Care',
        content:'Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.'
    }
];


function About() {
    return (
        <>
            <Container>
                <Row style={{height:'300px'}} className="d-flex justify-content-center align-items-center" >
                    <Col>
                        <p style={{textAlign:'center', fontSize:'50px'}}>About Us </p>
                        <p style={{textAlign:'center', fontSize:'17px'}}>Passion may be a friendly or eager interest in or admiration for a proposal, cause, discovery, or activity or love to a feeling of unusual excitement. </p>
                    </Col>
                </Row>
                <Row>
                        {
                            data.map((val, id)=> {
                                return(
                                <Col md={4}>
                                    <AboutCard key={id} img={val.img} title={val.title} content={val.content} />
                                </Col>
                                )
                            })
                        }
                </Row>
            </Container>
            {/* profle */}
            <Container fluid style={{background:'#f6f6f6'}} className="mt-5 pt-5 pb-5"> 
            <Container>
                        <Row >
                            {
                                profileData.map((val, id) =>{
                                    return(
                                        <>
                                        <Col md={2} key={id}>
                                            <ProfileCard  name={val.name} job={val.profession} img={val.img} />
                                        </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
            </Container>
            </Container>
            {/* more details */}
            <Container  className="mt-5 "> 
            <Row>
                        {
                            moreData.map((val, id)=> {
                                return(
                                <Col md={4}>
                                    <AboutCard key={id} img={val.img} title={val.title} content={val.content} />
                                </Col>
                                )
                            })
                        }
                        <Col md={4} className="About-Whatwedo">
                            <p>What we do for you?</p>
                            {
                                aboutTabsData.map((val, id)=> {
                                    return(
                                        <AboutTabs key={id} id={val.id} title={val.title} content={val.content} />
                                    )
                                })
                            }
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
