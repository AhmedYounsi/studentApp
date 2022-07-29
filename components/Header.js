import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { useRouter } from 'next/router';
function Header() {
  const router = useRouter();
  const [NavShow, setNavShow] = useState(false)
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
  useEffect(() => {
    setNavShow(false)
  }, [router.pathname])


  const Active = (route) => {
    return router.pathname == `${route}` ? "active" : "";
  };
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className={"nav-side " + (NavShow ? "show-nav" : "")}>
        <div className="head">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="/assets/img/aprims_white_2.png" alt="" />
          </a>
          <div onClick={() => setNavShow(false)} className='icon-menu'>
            <AiOutlineMenuFold />
          </div>
        </div>
        <br />
        <ul className='ul-side'>
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
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center">
          <img src="/assets/img/aprims_white_2.png" alt="" />
        </a>
        <div onClick={() => setNavShow(true)} className='icon-menu'>
          <AiOutlineMenuUnfold />
        </div>
        <nav id="navbar" className="navbar">
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
            <li><a className="get-a-quote" href="#">Connextion</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header