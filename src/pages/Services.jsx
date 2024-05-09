import React from "react";
import bannerImage from '../assets/image/banner.jpg';
import ecran from "../assets/image/surveiller.png";
import code_programmation from "../assets/image/fichier-de-programmation-de-code.png";
import loupe from "../assets/image/loupe.png";
import '../stylesCss/services.css';


export default function Services() {
    return (

        <section className="contenu-services">

            <div className="banner"></div>

            <div className="text-center m-5 mb-2">

                <h2 className="main-title d-flex justify-content-center">MON OFFRE DE SERVICES</h2>

                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-intro ">Voici les prestations sur lesquelles je peux intervenir.</p>
                </div>

                <hr className="ligne-blue mx-auto m-0" style={{ width: "14%" }} />

            </div>

            <div className="d-flex text-center flex-column flex-md-row justify-content-md-center flex-lg-row justify-content-lg-center mt-5 mb-5 col-12 col-lg-12 ">

                <div className="col-md-4 col-lg-3 d-flex">

                    <div className="card rounded-4 m-2 p-1 pb-5">
                        <div className="card-body pb-md-5">
                            <img className="icones mt-4" src={ecran} alt="écran d'ordinateur" />
                            <h3 className="card-title fs-4">UX DESIGN</h3>
                            <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                        </div>
                    </div>

                </div>

                <div className="d-flex col-md-4 col-lg-3 ">

                    <div className="card rounded-4 m-2 p-1 pb-5">
                        <div className="card-body">
                            <img className="icones mt-4" src={code_programmation} alt="fichier de programmation" />
                            <h3 className="card-title fs-4">DÉVELOPPEMENT WEB</h3>
                            <p className="card-text p-md-4 pt-md-0">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <span>HTML</span>, <span>CSS</span>. JavaScript et <span>PHP</span>.</p>
                        </div>
                    </div>

                </div>

                <div className="card rounded-4 m-2 col-md-4 col-lg-3  p-1 pb-5">
                    <div className="card-body">
                        <img className="icones mt-4" src={loupe} alt="loupe" />
                        <h3 className="card-title fs-4">RÉFÉRENCEMENT</h3>
                        <p className="card-text">Le <strong>référencement naturel d'un site,</strong> aussi appelé <span>SEO</span>, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                    </div>
                </div>

            </div>

        </section>
    );
}