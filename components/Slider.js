import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Slider() {

    const [Num1, setNum1] = useState(0)
    const [Num2, setNum2] = useState(0)
    const [Num3, setNum3] = useState(0)
  
   
   useEffect(() => {
     if(Num1 < 130){
        setTimeout(() => {
            setNum1(prev=>prev+1)
        },4);
     }  
   }, [Num1])
   useEffect(() => {
     if(Num2 < 70){
        setTimeout(() => {
            setNum2(prev=>prev+1)
        },9);
     }  
   }, [Num2])
   useEffect(() => {
     if(Num3 < 152){
        setTimeout(() => {
            setNum3(prev=>prev+1)
        },3);
     }  
   }, [Num3])
   

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row gy-4 d-flex justify-content-between">
                    <div
                        data-aos="flip-left"
                        className=" col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Agir Pour la Révolution Industrielle et Monétaire et Sociale</h1>
                        <p>
                            La mission de APRIMS est de mettre en relation professionnels et entrepreneurs
                            afin d{"'"}agir comme catalyseur du développement économique
                        </p>

                        <form action="#" className="form-search d-flex align-items-stretch mb-3"  >
                            <input type="text" className="form-control" placeholder="S'inscrire à notre newsletter" />
                            <button type="submit" className="btn btn-primary">S{"'"}inscrire</button>
                        </form>

                        <div className="row gy-4 justify-content-center"  >

                            <div className="col-lg-3 col-4 p-0">
                                <div className="stats-item text-center w-100 h-100">
                                    <span className="purecounter"> {Num1} </span>
                                    <p>Entrepreneurs</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-3">
                                <div className="stats-item text-center w-100 h-100">
                                    <span className="purecounter">{Num2}</span>
                                    <p>Projets</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-3">
                                <div className="stats-item text-center w-100 h-100">
                                    <span className="purecounter">{Num3}</span>
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
    )
}

export default Slider