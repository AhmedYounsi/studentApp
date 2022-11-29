import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs"
import { BsFillPinMapFill, BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Forms from '../components/Forms'
function Contact() {
  return (
    <div className='_contact'>
      <Breadcrumbs route={"contact"} title="Contactez-nous" />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div data-aos="fade-up" className="section-header">
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
                <p>40 rue Alexandre Dumas 75011 Paris</p>
              </div>
            </div>

            <div className=" info-item d-flex">
              <div className='icon'>

                <GrMail />
              </div>
              <div>
                <h4>Email:</h4>
                <p>info@aprims.org
                </p>
              </div>
            </div>

            <div className=" info-item d-flex">
              <div className='icon'>

                <BsFillTelephoneFill />
              </div>
              <div>
                <h4>Téléphone:</h4>
                <p>00337510523337</p>
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