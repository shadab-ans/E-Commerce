import {React, useState, useEffect} from 'react'
import './About.css'

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>;


function AboutTabs({id, title, content}) {
    const [ID, setID] = useState(null);
    useEffect(()=>{
        setID(id);
    }, [id])

    const toggle = () => {
        let box = document.getElementById(ID);
        if(box.style.display === 'none'){
            box.style.display = 'block';
            box.style.transition = '0.5s'
        }
        else{
            box.style.display = 'none';
        }
    }

    return (
        <>
            <div className="AboutTabs">
                <section className="AboutTabs-icon" onClick={toggle}> {icon} </section>
                <section className="AboutTabs-title">{title}</section>
                
            </div>
            <section id={id} className="AboutTabs-content"> {content} </section>
        </>
    )
}

export default AboutTabs
