import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='_Home'>

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

              <div className="row gy-4"  >

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">130</span>
                    <p>Entrepreneurs</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">68</span>
                    <p>Projets</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span className="purecounter">152</span>
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div   data-aos="flip-right" className="col-lg-5 order-1 order-lg-2 hero-img" >
              <img src="/assets/img/visuel_blog_seul.png" className="img-fluid mb-3 mb-lg-0" alt="0" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
     <div className='back-about'></div>
        <div className="container" >
          <div data-aos="fade-up">

          <h3 className='heading'>Présentation</h3>
          <p className='text'>
            Un réseau international des professionnels et des entrepreneurs
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
                    <h5>Les influenceurs d'opinion publique</h5>
                    <p>Nous identifions et mobilisons la diaspora, ainsi que faisons du lobbying dans différentes villes à travers le monde. </p>
                  </div>
                </li>
                <li>
                <img src="/assets/img/icons/icone_1.png" alt="" />
                  <div>
                    <h5>Les professionnels d'un secteur économique</h5>
                    <p>Nous mettons en contact des professionnels et des entrepreneurs dans le business dans de nombreuses villes.</p>
                  </div>
                </li>
                <li >
                <img src="/assets/img/icons/icone_0.png" alt="" />
                  <div>
                    <h5>Les entrepreneurs et les porteurs de projet</h5>
                    <p>Nous offrons notre expertise pour aider les entreprises à faire le business dans la diaspora.</p>
                  </div>
                </li>
                <li >
                <img src="/assets/img/icons/icone_2.png" alt="" />
                  <div>
                    <h5>La création d'emplois dans l'économie</h5>
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
              <h3>Call To Action</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home