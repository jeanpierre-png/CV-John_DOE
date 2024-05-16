import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesCss/nav.css";

export default function Navbar() {

    // Pour suivre quel lien est actuellement actif
    const [activesLink, setActiveLink] = useState("");

    // Fonction pour mettre à jour l'état de l'onglet actif lors d'un clique 
    const linkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar navbar-expand-lg px-lg-5 navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">JOHN DOE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav gap-1">
                        <Link
                            className={`nav-link ${activesLink === "home" ? "active" : ""}`}
                            aria-current={activesLink === "home" ? "page" : ""}
                            to="/"
                            onClick={() => linkClick("home")}
                        >
                            ACCUEIL
                        </Link>
                        <Link
                            className={`nav-link ${activesLink === "services" ? "active" : ""}`}
                            aria-current={activesLink === "services" ? "page" : ""}
                            to="/services"
                            onClick={() => linkClick("services")}
                        >
                            SERVICES
                        </Link>
                        <Link
                            className={`nav-link ${activesLink === "réalisations" ? "active" : ""}`}
                            aria-current={activesLink === "réalisations" ? "page" : ""}
                            to="/réalisations"
                            onClick={() => linkClick("réalisations")}
                        >
                            RÉALISATIONS
                        </Link>
                        <Link
                            className={`nav-link ${activesLink === "blog" ? "active" : ""}`}
                            aria-current={activesLink === "blog" ? "page" : ""}
                            to="/blog"
                            onClick={() => linkClick("blog")}
                        >
                            BLOG
                        </Link>
                        <Link
                            className={`nav-link ${activesLink === "contacter" ? "active" : ""}`}
                            aria-current={activesLink === "contacter" ? "page" : ""}
                            to="/contacter"
                            onClick={() => linkClick("contacter")}
                        >
                            ME CONTACTER
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
