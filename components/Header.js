import React from 'react'

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="/assets/img/aprims_white.png" alt="" />
      </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="index.html" className="active">Accueil</a></li>
          <li><a href="about.html">Présentation</a></li>
          <li><a href="services.html">Notre cible</a></li>
          <li><a href="pricing.html">Nos actions</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a className="get-a-quote" href="get-a-quote.html">Connextion</a></li>
        </ul>
      </nav>

    </div>
  </header>
  )
}

export default Header