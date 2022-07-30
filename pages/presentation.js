import Head from 'next/head'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Faq from '../components/Faq'

function Presentation() {
  return (
    <div className='_pres'>
      <Head>
        <title>Connecter les professionnels
          et les entrepreneurs</title>
      </Head>
      <Breadcrumbs route={"présentation"}
        title={"Connecter  les professionnels"}
        title2="et les entrepreneurs"
      />
      <section id="about" className="about">

        <div className="container" >

          <div data-aos="fade-up">
            <div className="section-header">
              <span>Révolution Industrielle et Monaitére et Sociale</span>
              <h2>Révolution Industrielle et Monaitére et Sociale</h2>
            </div>
            <p className='text'>
              APRIMS est un réseau international des professionnels et des entrepreneurs
              ambitieux et compétents qui évoluent dans différents secteurs
              économiques. Nous travaillons selon nos objectifs et nos valeurs
              communes afin de contribuer notre expertise au développement
              économique
            </p>
          </div>
          <div data-aos="fade-up" className="row gy-4">
            <div className="col-lg-6 position-relative order-lg-last order-first">
              <img src="assets/img/professionnels et entrepreneurs.webp" className="img-fluid video-image" alt="" />
              <a href="" className="glightbox play-btn"></a>
            </div>
            <div className="col-lg-6 content order-last  order-lg-first">
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
      <Faq />
    </div>
  )
}

export default Presentation