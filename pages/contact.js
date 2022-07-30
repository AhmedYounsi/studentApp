import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs"
import {BsFillPinMapFill,BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
function Contact() {
  return (
    <div className='_contact'>
      <Breadcrumbs route={"contact"} title="Contactez-nous" />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          

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
 
          <div className="section-header mt-5 mb-0">
              <span>Envoyez-nous</span>
              <h2>Envoyez-nous</h2>

            </div>

          <div className="form-contact row gy-4">
            <div className="col-12">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Nom et prénom" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
    
                <div className="text-center"><button type="submit">Envoyer Message</button></div>
              </form>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact