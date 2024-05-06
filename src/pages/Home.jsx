import React from "react";
import johnDoeImage from '../assets/image/john-doe-about.jpg';
import '../stylesCss/home.css';


export default function Home() {
    return (
        <>

            <section className="background-container d-flex justify-content-center align-items-center" >

                <div className="superposition-noire"></div>

                <div className="content-container d-flex flex-column align-items-center gap-3">

                    <div className="col-9 col-md-11 col-lg-12">
                        <h1>Bonjour, je suis John Doe</h1>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <h2> Développeur web full stack </h2>
                    </div>

                    <a href="#a-propos" className='bouton-savoir-plus-home btn btn-primary text-light'>En savoir plus</a>

                </div>

            </section>


            <section className="d-flex align-items-center justify-content-center mb-5 gap-5" id="a-propos">

                <div className="a-propos d-flex justify-content-evenly flex-column flex-md-row flex-lg-row rounded-2 p-4 mt-5 border-0 p-5 col-12 col-md-11 col-lg-11 col-xl-11">

                    <div className="d-flex flex-column gap-3 col-md-7 col-lg-7 col-xl-4">

                        <div className="titre-section-a-propos col-md-11 col-lg-11 col-xl-12">
                            <h3>À propos</h3>
                            <hr />
                        </div>

                        <div className="d-flex flex-column gap-2 col-md-11 col-lg-10 col-xl-12">
                            <p>
                                Passionné par l'informatique et les nouvelles technologies, 
                                j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF.
                                Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du
                                <strong>dévelopemment web.</strong>
                            </p>
                            <p>
                                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation 
                                de <strong>développeur web full stack.</strong>
                            </p>
                            <p>
                                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                            </p>
                        </div>

                    </div>

                    <div className="col-11 col-md-5 col-lg-5 col-xl-7">

                        <img className="rounded-2 col-12 col-md-12 col-lg-12 col-xl-12" src={johnDoeImage} alt="John Doe" />

                        <h3 className="mt-2">Mes compétences</h3>

                        <div className="competences d-flex flex-column gap-md-2">

                            <div>
                                <p className="mb-2 mt-2">HTML5 90%</p>
                                <div className="progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div>
                                <p className='mb-2 mt-2'>CSS3 80%</p>

                                <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                            <div>
                                <p className='mb-2 mt-2'>JAVASCRIPT 70%</p>
                                <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                                </div>
                            </div>

                            <div>
                                <p className='mb-2 mt-2'>PHP 60%</p>
                                <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
                                </div>
                            </div>

                            <div>
                                <p className='mb-2 mt-2'>REACT 50%</p>
                                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}
