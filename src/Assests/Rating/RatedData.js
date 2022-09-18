import React from 'react'
import './Rating.css'
// import Rating from './Rating'
import {star} from './Rating'
import { ProgressBar } from 'react-bootstrap'

const RatedData = () => {
    return (
        <div>
            <section className="ratedData__section"> <span> {star} {star} {star} {star} {star} </span> <ProgressBar variant="warning" now={90} /> </section>
            <section className="ratedData__section"> <span> {star} {star} {star} {star} <span className="not">{star}</span> </span> <ProgressBar variant="warning" now={70} />  </section>
            <section className="ratedData__section"> <span> {star} {star} {star}  <span className="not">{star} {star} </span>  </span> <ProgressBar variant="warning" now={50} /> </section>
            <section className="ratedData__section"> <span> {star} {star}  <span className="not">{star} {star} {star} </span> </span> <ProgressBar variant="warning" now={40} /> </section>
            <section className="ratedData__section"> <span> {star} <span className="not">{star} {star} {star} {star} </span> </span> <ProgressBar variant="warning" now={20} /> </section>
        </div>
    )
}

export default RatedData
