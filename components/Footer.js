import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';

function Footer() {
  const router = useRouter();

  const Active = (route) => {
    return router.pathname == `${route}` ? "active" : "";
  };
  return (
    <footer id="footer" className="footer">
   
<div className="back-about"></div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4 col-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
            <img src="/assets/img/aprims_white_2.png" alt="" />
            </a>
            <p>
            APRIMS est un réseau international des professionnels et des entrepreneurs 
            ambitieux et compétents qui évoluent dans différents secteurs économiques. Nous
             travaillons selon nos objectifs et nos valeurs communes 
            afin de contribuer notre expertise au développement économique
            </p>
            <div className="social-links d-flex justify-content-center mt-4">
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

          <div className="col-md-4 col-sm-6 col-6 footer-links">
            <h4>Liens utiles</h4>
            <ul>
            <li>
          <Link href='/'>
          <a className={Active("/")}>Accueil</a>
         </Link></li>
          <li>
          <Link href='/presentation'>
          <a className={Active("/presentation")}>Présentation</a>
         </Link>
            </li>
          <li>
          <Link href='/cible'>
          <a className={Active("/cible")}>Notre cible</a>
         </Link>
            </li>
          <li>
          <Link href='/actions'>
          <a className={Active("/actions")}>Nos actions</a>
         </Link>
            </li>
          <li>
          <Link href='/contact'>
          <a className={Active("/contact")}>Contact</a>
         </Link>
            </li>
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

          <div className="col-md-4 col-sm-6 col-6 footer-links">
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