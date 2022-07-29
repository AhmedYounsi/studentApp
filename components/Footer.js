import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer id="footer" className="footer">
<div className="back-about"></div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="/assets/img/aprims_white.png" alt="" />
            </a>
            <p>
            APRIMS est un réseau international des professionnels et des entrepreneurs 
            ambitieux et compétents qui évoluent dans différents secteurs économiques. Nous
             travaillons selon nos objectifs et nos valeurs communes 
            afin de contribuer notre expertise au développement économique
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#" className="twitter">
                <FaTwitter />
              </a>
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="instagram">
                <FaInstagram />
              </a>
              <a href="#" className="linkedin">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-6 footer-links">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="#">Acceuil</a></li>
              <li><a href="#">Présentation</a></li>
              <li><a href="#">Notre cible</a></li>
              <li><a href="#">Nos actions</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div> */}

          <div className="col-lg-4 col-md-12 footer-links">
            <h4>Contact</h4>
            <p>
              A108 Adam Street  <br />
              New York, NY 535022 <br />
              United States <br />
              <b>Téléphone:</b> +1 5589 55488 55 <br />
              <b>Email:</b> info@example.com <br />
            </p>

          </div>

        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright <strong><span>APRIMS</span></strong>. Tous les droits sont réservés
        </div>
       
      </div>
    </footer>
  )
}

export default Footer