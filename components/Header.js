import React, { useEffect } from 'react'
import Link from 'next/link'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
function Header() {
  useEffect(() => {
    window.onscroll = function (e) {
      const element = document.querySelector(".header");
      if (window.scrollY > 50) {
        element.classList.add("scrolled-header");
      } else {
        element.classList.remove("scrolled-header");
      }
    };
  }, []);
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="/assets/img/aprims_white_2.png" alt="" />
      </a>
     <div className='icon-menu'>
     <AiOutlineMenuUnfold />
     </div>
      <nav id="navbar" className="navbar">
        <ul>
        
          <li>
          <Link href='/'>
          <a>Accueil</a>
         </Link></li>
          <li>
          <Link href='/presentation'>
          <a>Présentation</a>
         </Link>
            </li>
          <li>
          <Link href='/cible'>
          <a>Notre cible</a>
         </Link>
            </li>
          <li>
          <Link href='/actions'>
          <a>Nos actions</a>
         </Link>
            </li>
          <li>
          <Link href='/contact'>
          <a>Contact</a>
         </Link>
            </li>
          <li><a className="get-a-quote" href="#">Connextion</a></li>
        </ul>
      </nav>

    </div>
  </header>
  )
}

export default Header