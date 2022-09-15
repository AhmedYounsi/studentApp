import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs"
import {BsFillPinMapFill,BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import Forms from '../components/Forms'
function Contact() {
  return (
    <div className='_contact'>
      <Breadcrumbs route={"contact"} title="Contactez-nous" />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
        <div data-aos="fade-up"  className="section-header">
                <span>Nos Contacts</span>
                <h2>Nos Contacts</h2>
            </div>

          <div className="contact-info">
          <div className=" info-item d-flex">
           <div className='icon'>
           <BsFillPinMapFill /> 
           </div>
              <div>
                <h4>Adresse:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className=" info-item d-flex">
            <div className='icon'>

          <GrMail /> 
            </div>
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </div>

            <div className=" info-item d-flex">
            <div className='icon'>

            <BsFillTelephoneFill />
            </div>
              <div>
                <h4>Téléphone:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>
 
          
        </div>
      </section>
     <Forms /> 
    </div>
  )
}

export default Contact