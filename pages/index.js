import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Head from 'next/head';

function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='_Home'>
        <Head>
        <title>APRIM Agir Pour la Révolution Industrielle et Monaitaire et Sociale</title>
      </Head>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div
              data-aos="flip-left"
              className=" col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Agir Pour la Révolution Industrielle et Monaitaire et Sociale</h1>
              <p>
                La mission de APRIMS est de mettre en relation professionnels et entrepreneurs
                afin d'agir comme catalyseur du développement économique
              </p>

              <form action="#" className="form-search d-flex align-items-stretch mb-3"  >
                <input type="text" className="form-control" placeholder="S'inscrire à notre newsletter" />
                <button type="submit" className="btn btn-primary">S'inscrire</button>
              </form>

              <div className="row gy-4 justify-content-center"  >

                <div className="col-lg-3 col-4 p-0">
                  <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">130</span>
                    <p>Entrepreneurs</p>
                  </div>
                </div>

                <div className="col-lg-3 col-3">
                  <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">68</span>
                    <p>Projets</p>
                  </div>
                </div>

                <div className="col-lg-3 col-3">
                  <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">152</span>
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="flip-right" className="col-lg-5 order-1 order-lg-2 hero-img" >
              <img src="/assets/img/visuel_blog_seul.png" className="img-fluid mb-3 mb-lg-0" alt="0" />
            </div>
          </div>
        </div>
      </section>
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
                    <h3>Les influenceurs d'opinion publique</h3>
                    <p>Nous identifions et mobilisons la diaspora, ainsi que faisons du lobbying dans différentes villes à travers le monde. </p>
                  </div>
                </li>
                <li>
                  <img src="/assets/img/icons/icone_1.png" alt="" />
                  <div>
                    <h3>Les professionnels d'un secteur économique</h3>
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
                    <h3>La création d'emplois dans l'économie</h3>
                    <p>Nous développons des projets qui contribuent à la création d'emplois et à la croissance économique</p>
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
                et soigner votre communication font également partie de votre job de chef d'entreprise.
                Vous disposez de toute l'information de nos actions dont vous avez besoin dans
                le cadre de votre projet entrepreneurial.</p>
              <Link href="actions">
                <a className='cta-btn'>Voir plus</a>
              </Link>
            </div>
          </div>

        </div>
      </section>
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>Foire aux questions</span>
            <h2>Foire aux questions</h2>

          </div>
 <br />
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-10">

              <div className="accordion accordion-flush" id="faqlist">

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      <i className="bi bi-question-circle question-icon"></i>
                      Qui peut m’aider dans mon projet ?
                    </button>
                  </h3>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      <i className="bi bi-question-circle question-icon"></i>
                      Comment je peux protéger mon idée ? 
                    </button>
                  </h3>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      <i className="bi bi-question-circle question-icon"></i>
                      Est-ce que je peux être salarié et entrepreneur ? 
                    </button>
                  </h3>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                      <i className="bi bi-question-circle question-icon"></i>
                      Comment je trouve des professionnels ? 
                    </button>
                  </h3>
                  <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      <i className="bi bi-question-circle question-icon"></i>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                </div>

             

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home