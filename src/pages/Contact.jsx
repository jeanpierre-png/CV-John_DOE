import React from "react";
import contactBg from "../assets/image/contact-bg.jpg";
import marqueur from "../assets/image/marqueur-de-carte.png";
import telephone from "../assets/image/appel-sur-smartphone.png";
import "../stylesCss/contact.css";


export default function Contact() {

    return (

        <section className="background-container-bg">
            <img
                className="section-overlay"
                src={contactBg}
            />
            <div className="superposition-blue"></div>

            <div className="d-flex align-items-center justify-content-center gap-5 ">
                <div className="cadre rounded-2 p-4 mt-3 mb-5 col-10 col-md-11 col-lg-10">
                    <div className="row m-1">
                        <div className="mb-3 col-lg-12 ">
                            <div className="d-flex flex-column align-items-cente text-center p-3">
                                <h2 className="main-title fs-1 mx-auto col-10">ME CONTACTER</h2>
                                <p className="mx-auto col-11 col-md-9 ">
                                    Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                                </p>
                                <hr className="trait-2 mx-auto mb-1" style={{ width: "14%" }} />
                            </div>
                        </div>
                        <div className="mt-1 col-md-6 col-lg-6">
                            <div className="titre-section">
                                <h3 className="fs-2 col-9 col-md-10">Formulaire de contact</h3>
                                <hr />
                            </div>
                            <div className="d-flex flex-column fs-4 mt-4 mb-2 col-12">
                                <form className="d-flex flex-column gap-3">
                                    <input type="text" className="form-control" id="inputNom" placeholder="Votre nom" />
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Votre adresse email" />
                                    <input type="text" className="form-control" id="inputPhone" placeholder="Votre numéro de téléphone" />
                                    <input type="text" className="form-control" id="inputSujet" placeholder="Sujet" />
                                    <textarea className="p-2 rounded-2 border border-dark-subtle" cols="30" rows="5" placeholder="Votre message" required></textarea>
                                    <button type="submit" className="btn btn-primary d-flew justify-content-center align-self-center">Envoyer</button>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-start col-md-6 col-lg-6">

                            <div className="titre-section mt-1 col-12">

                                <h3 className="fs-2 col-9">Mes coordonnées</h3>
                                <hr />

                                <div className="d-flex flex-column mt-4">

                                    <address className="m-0"><img className="icone" src={marqueur} alt="marqueur" /> 40 Rue Laure Diebold, 69009 Lyon, France</address>
                                    <a className="text-dark" href="tel:06 20 30 40 50"><img className="icone" src={telephone} alt="télephone"/> 06 20 30 40 50</a>

                                    <div className="col-12">

                                      <iframe className="mt-3 col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2543020379735!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1713922890049!5m2!1sfr!2sfr" height="290" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}


