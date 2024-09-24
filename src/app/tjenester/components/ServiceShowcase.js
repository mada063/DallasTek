
import "./ServiceShowcase.css"
import React from 'react'
import Venndiagram from "../../assets/Venndiagram"
import VenndiagramLight from "../../assets/VenndiagramLight"
import Venndiagram2 from "../../assets/Venndiagram2"

const ServiceShowcase = () => {
  return (
    <div className="service-showcase-container">
        <div className="service-showcase-diagram">
            <Venndiagram2 />
        </div>
        <div className="service-showcase-title">
            <h3>
            Hos oss kombinerer vi vår kunnskap innen design, utvikling og strategi for å skape skreddersydde løsninger som ikke bare møter, men overgår dine forventninger.
            </h3>
        </div>
    </div>
  )
}

export default ServiceShowcase