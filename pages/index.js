import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Head from 'next/head';
import Faq from '../components/Faq';
import Forms from '../components/Forms';
import Slider from '../components/Slider';
function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='_Home'>
        <Head>
        <title>APRIM Agir Pour la Révolution Industrielle et Monaitére et Sociale</title>
      </Head>
     <Slider />
      <section id="about" className="about">
        <div className='back-about'></div>
        <div className="container" >

          <div data-aos="fade-up">
            <div className="section-header">
              <span>Présentation</span>
              <h2>Présentation</h2>
            </div>  
            <p className='text'>
              APRIMS est un réseau international des professionnels et des entrepreneurs
              ambitieux et compétents qui évoluent dans différents secteurs
              économiques. Nous travaillons selon nos objectifs et nos valeurs
              communes afin de contribuer notre expertise au développement
              économique
            </p>
          </div>
          <div className="row gy-4">
            <div data-aos="fade-up-left" className="col-lg-6 position-relative order-lg-last order-first">
              <img src="assets/img/professionnels et entrepreneurs.webp" className="img-fluid video-image" alt="" />
              <a href="" className="glightbox play-btn"></a>
            </div>
            <div data-aos="fade-up-right" className="col-lg-6 content order-last  order-lg-first">
              <ul className='about-items'>
                <li>
                  <img src="/assets/img/icons/icone_4.png" alt="" />
                  <div>
                    <h3>Les influenceurs d{"'"}opinion publique</h3>
                    <p>Nous identifions et mobilisons la diaspora, ainsi que faisons du lobbying dans différentes villes à travers le monde. </p>
                  </div>
                </li>
                <li>
                  <img src="/assets/img/icons/icone_1.png" alt="" />
                  <div>
                    <h3>Les professionnels d{"'"}un secteur économique</h3>
                    <p>Nous mettons en contact des professionnels et des entrepreneurs dans le business dans de nombreuses villes.</p>
                  </div>
                </li>
                <li >
                  <img src="/assets/img/icons/icone_0.png" alt="" />
                  <div>
                    <h3>Les entrepreneurs et les porteurs de projet</h3>
                    <p>Nous offrons notre expertise pour aider les entreprises à faire le business dans la diaspora.</p>
                  </div>
                </li>
                <li >
                  <img src="/assets/img/icons/icone_2.png" alt="" />
                  <div>
                    <h3>La création d{"'"}emplois dans l{"'"}économie</h3>
                    <p>Nous développons des projets qui contribuent à la création d{"'"}emplois et à la croissance économique</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </section>
      <section id="call-to-action" className="call-to-action">
        <div className="container" data-aos="zoom-out">

          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
            <div className="section-header">
              <span>Nos actions</span>
              <h2>Nos actions</h2>

            </div>
              <p>
                Gagner de nouveaux contacts, enrichir votre réseau professionnel
                et soigner votre communication font également partie de votre job de chef d{"'"}entreprise.
                Vous disposez de toute l{"'"}information de nos actions dont vous avez besoin dans
                le cadre de votre projet entrepreneurial.</p>
              <Link href="actions">
                <a className='cta-btn'>Voir plus</a>
              </Link>
            </div>
          </div>

        </div>
      </section>

   <Forms />
    </div>
  )
}

export default Home