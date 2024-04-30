import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesCss/nav.css";
import favicon from "../assets/image/favicon.png";


export default function Navbar() {
    // État local pour suivre quel lien est actuellement actif
    const [activesLink, ActiveLink] = useState("");

    // Fonction pour mettre à jour l'état de l'onglet actif
    const Active = (link) => {
        ActiveLink(link);
    };

    return (
        <nav className="navbar bg-dark" data-bs-theme="dark">

            <div className="container-fluid mt-2">

                <h1 className="navbar-brand "><img src={favicon}></img>JOHN DOE</h1>

                <div className="nav nav-tabs" id="nav-tab" role="tablist">

                    <Link
                        className={`nav-link ${activesLink === "home" ? "active" : ""}`}
                        aria-selected={activesLink === "home"}
                        to="/"
                        onClick={() => Active("home")}
                    >
                        Accueil
                    </Link>

                    <Link
                        className={`nav-link ${activesLink === "services" ? "active" : ""}`}
                        aria-selected={activesLink === "services"}
                        to="/services"
                        onClick={() => Active("services")}
                    >
                        Services
                    </Link>

                    <Link
                        className={`nav-link ${activesLink === "réalisations" ? "active" : ""}`}
                        aria-selected={activesLink === "réalisations"}
                        to="/réalisations"
                        onClick={() => Active("réalisations")}
                    >
                        Réalisations
                    </Link>

                    <Link
                        className={`nav-link ${activesLink === "blog" ? "active" : ""}`}
                        aria-selected={activesLink === "blog"}
                        to="/blog"
                        onClick={() => Active("blog")}
                    >
                        Blog
                    </Link>

                    <Link
                        className={`nav-link ${activesLink === "contacter" ? "active" : ""}`}
                        aria-selected={activesLink === "contacter"}
                        to="/contacter"
                        onClick={() => Active("contacter")}
                    >
                        Me Contacter
                    </Link>

                </div>

            </div>

        </nav>
    );
}

