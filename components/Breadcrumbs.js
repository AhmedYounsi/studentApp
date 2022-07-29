import React from 'react'
import Link from "next/link"
function Breadcrumbs(props) {
  return (
    <div className="breadcrumbs">
    <div  className="page-header d-flex align-items-center">
      <div  data-aos="flip-left" className="container position-relative">
        <h1> {props.title}
        <br />
        {props.title2}
         </h1>
        <nav>
        <div className="container">
          <ol>
            <li>
              <Link href='/'>
              <a>Accueil</a>
              </Link>
            </li>
            <li> {props.route} </li>
          </ol>
        </div>
      </nav>
      </div>
    </div>
   
  </div>
  )
}

export default Breadcrumbs