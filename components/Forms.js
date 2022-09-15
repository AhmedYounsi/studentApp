import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineDangerous } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
function Forms() {
    const NomRef = useRef(null)
    const MailRef = useRef(null)
    const SujetRef = useRef(null)
    const MsgRef = useRef(null)
    const [Nom, setNom] = useState("")
    const [Mail, setMail] = useState("")
    const [Sujet, setSujet] = useState("")
    const [Message, setMessage] = useState("")
    const [Error, setError] = useState(null)
    const [Success, setSuccess] = useState(false)
    const HandleForm = (e) => {

        e.preventDefault()
        if (Nom.length < 4) {
            setError("Votre nom a au moins 4 lettres")
             return
        }
        else {
             setError(null)
        }
        if  (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Mail)) {
            setError("Adresse mail invalid")
             return
        }
        else {
             setError(null)
        }
        if (Sujet == "") {
            setError("Veuillez saisir votre Sujet")
             return
        }
        else {
             setError(null)
        }
        if (Message == "") {
            setError("Veuillez saisir votre Message")
             return
        }
        else {
             setError(null)
        }
        setSuccess(true)
        setMail("")
        setMessage("")
        setNom("")
        setSujet("")
        setTimeout(() => {
            setSuccess(false)
        }, 2000);
    }
   
    const DeleteClass = (e)=>{
        // const element = document.getElementById(e.target.id)
        // element.classList.remove("error_input")
        setError(null)
    }

    const AddClass = (input)=>{
        if(!Error) return
        if(input == "nom" && Nom.length < 4) return "error_input"
        if(input == "sujet" && Sujet == "") return "error_input"
        if(input == "message" && Message == "") return "error_input"
        if(input == "mail" &&
        (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Mail))
        ) return "error_input"
    }

    return (
        <section id="contact" className="contact">
            <div data-aos="fade-up"  className="section-header">
                <span>Envoyez-nous</span>
                <h2>Envoyez-nous</h2>
            </div>
            <div data-aos="fade-up"  className="form-contact row gy-4">
                <div className="col-12">
                    {Error && <div
                        onClick={() => setError(null)}
                        className='alert-div danger'>
                        <MdOutlineDangerous />
                        {Error}
                    </div>}
                    {Success && <div
                        onClick={() => setError(null)}
                        className='alert-div success'>
                        <AiOutlineCheckCircle />
                        Votre message a été envoyé avec succès 
                    </div>}
                    <form onChange={e=>DeleteClass(e)} onSubmit={HandleForm} method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input
                                    value={Nom}
                                    onChange={e => setNom(e.target.value)}
                                    type="text"
                                    ref={NomRef}
                                    id='nom'
                                    className={"form-control "+AddClass("nom")}
                                    placeholder="Nom et prénom" />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                id='mail'
                                 ref={MailRef}
                                    value={Mail}
                                    onChange={e => setMail(e.target.value)}
                                    type="email"
                                    className={"form-control "+AddClass("mail")}
                                     name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input
                            id='sujet'
                             ref={SujetRef}
                                value={Sujet}
                                onChange={e => setSujet(e.target.value)}
                                type="text"                                 
                                className={"form-control "+AddClass("sujet")}
                                name="subject" placeholder="Sujet" />
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                            id='message'
                               ref={MsgRef}
                                value={Message}
                                onChange={e => setMessage(e.target.value)}
                                className={"form-control "+AddClass("message")}
                                name="message" rows="5" placeholder="Message" ></textarea>
                        </div>
                        <div className="text-center mt-3"><button type="submit">Envoyer Message</button></div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Forms