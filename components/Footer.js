import React, { useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { BsFillPinMapFill, BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, [])
  const Active = (route) => {
    return router.pathname == `${route}` ? "active" : "";
  };
  return (
    <footer id="footer" className="footer">
      <div className="back-about"></div>
      <div className="container">
        <div className="row gy-4 over-hidden row-footer">
          <div data-aos="fade-right" className="col-md-4 col-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="/assets/img/aprims_white_2.png" alt="" />
            </a>
            <p>
              APRIMS est réseau d{"'"}affaires d{"'"}influence qui évolue dans différents secteurs économiques. Nous
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

          <div data-aos="fade-right" className=" col-md-4 col-sm-6 col-5 footer-links">
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

          <div data-aos="fade-left" className="col-md-4 col-sm-6 col-7  footer-links">
            <h4>Contact</h4>
            <ul className='icons-contact'>
              <li>
                <BsFillPinMapFill />
                <p className='m-0'> 40 rue Alexandre Dumas 75011 Paris</p></li>
              <li>
                <BsFillTelephoneFill />
                00337510523337
                <br />
              </li>
              <li>
                <GrMail />
                info@aprims.org
                <br /></li>
            </ul>
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