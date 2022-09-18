import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Featured from "../FeaturedMenu/Featured";
import "../FeaturedMenu/FeaturedMenu.css";

const imgSrcData = [
    {   
        eventKey:"home",
        title:"Best Deals",
        imgSrc : "https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img2.jpg"
    },
    {   eventKey:"profile",
        title:"TV & Videos",
        imgSrc : "https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img1.jpg"
    },
    {   eventKey:"contact",
        title:"Camera",
        imgSrc : "https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img3.jpg"
    },
    {   eventKey:"smartphone",
        title:"Smartphone",
        imgSrc : "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg"
},
];

function BestOffer() {
    return (
        <>
            <div className="mt-1 FeaturedMenu">
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            {
                imgSrcData.map((val, id) => {
                    return(
                        <Tab key={id} eventKey={val.eventKey} title={val.title}>
                             <Featured imgSrc={val.imgSrc} />
                        </Tab>
                    )
                })
            }
            </Tabs>
            </div>
        </>
    )
}

export default BestOffer
