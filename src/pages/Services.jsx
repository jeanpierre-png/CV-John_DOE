import React from "react";
import bannerImage from '../assets/image/banner.jpg';
import ecran from "../assets/image/surveiller.png";
import code_programmation from "../assets/image/fichier-de-programmation-de-code.png";
import loupe from "../assets/image/loupe.png";
import '../stylesCss/services.css';


export default function Services() {
    return (

        <section className="contenu-services">

            <img className="image-banner" src={bannerImage} alt='banner' ></img>

            <div>

                <h2 className="main-title mt-5">MON OFFRE DE SERVICES</h2>

                <div className="d-flex justify-content-center align-items-center text-center mt-3">
                    <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                </div>

                <hr className="mx-auto m-0" style={{ width: "14%" }} />

            </div>

            <div className="row d-flex justify-content-center mt-5 align-items-center flex-column flex-sm-column flex-lg-row flex-md-wrap gap-3 mt-5 mb-5 col-12 col-lg-12 justify-content-lg-center">

                <div className="card m-2" style={{ width: "357px", height: "357px" }} >

                    <div className="card-body p-5">
                        <img className="icones" src={ecran} alt= "écran d'ordinateur"/>
                        <h3 className="card-title">UX DESIGN</h3>
                        <p className="card-text">L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </div>
                </div>

                <div className="card m-2" style={{ width: "357px", height: "357px" }}>

                    <div className="card-body p-4">
                        <img className="icones" src={code_programmation} alt="fichier de programmation"/>
                        <h3 className="card-title">DÉVELOPPEMENT WEB</h3>
                        <p className="card-text">Le développement de sites web repose sur l'utilisation des langages HTML, CSS. JavaScript et PHP.</p>
                    </div>
                </div>

                <div className="card m-2" style={{ width: "357px", height: "357px" }}>

                    <div className="card-body p-5">
                        <img className="icones" src={loupe} alt="loupe"/>
                        <h3 className="card-title">RÈFÈRENCEMENT</h3>
                        <p className="card-text">Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                    </div>
                </div>

            </div>


        </section>

    );
}