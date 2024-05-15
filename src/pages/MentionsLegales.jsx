import React from "react";
import "../stylesCss/mentionLegale.css";
import marqueur from "../assets/image/marqueur-de-carte.png";
import telephone from "../assets/image/appel-sur-smartphone.png";
import email from "../assets/image/email.png";
import globe from "../assets/image/la-toile.png";


export default function MentionsLegales() {

    return (

        <section>

            <div className="mb-5">

                <h2 className="main-title d-flex justify-content-center align-items-center text-center mt-5">MENTIONS LÉGALES</h2>

                <hr className="trait-2 mx-auto m-0" style={{ width: "14%" }} />

            </div>

            <div className="d-flex justify-content-center align-items-center mb-4">

                <div className="accordion col-11 col-md-9 col-lg-11" id="accordionExample">
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Éditeur du site
                            </button>
                        </h3>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h4>John Doe</h4>
                                <address className="m-0">
                                    <img className="icone" src={marqueur} alt="marqueur" />40 Rue Laure Diebold <br />
                                    69009 Lyon, France
                                </address>
                                <div>
                                    <a href="tel:06 20 30 40 50"><img className="icone" src={telephone} alt="télephone" /> 06 20 30 40 50</a>
                                </div>

                                <div>
                                    <a href="mailto:john.doe@gmail.com"><img className="icone" src={email} alt="enveloppe e-mail" /> john.doe@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h3>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <h4>Always Data</h4>
                                <address>
                                    91 rue du Faubourg Saint-Honoré <br />
                                    75008 Paris
                                </address>

                                <div>
                                    <a href="mailto:alwaysdata.com"><img className="icone" src={globe} alt="site web" /> www.alwaysdata.com</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h3>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <h4>Crédits</h4>
                                <p>
                                    Site développé par John Doe, étudiant du CEF.
                                </p>

                                <div>
                                    <p> Les images libres de droit sont issues du site <a href="Pixabay">Pixabay</a>.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}