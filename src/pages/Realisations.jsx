import React from "react";
import Portfolio from "../components/Portfolio";
import fresh_food from "../assets/portfolio/fresh-food.jpg";
import restaurant_akira from "../assets/portfolio/restaurant-japonais.jpg";
import espace_bien_etre from "../assets/portfolio/espace-bien-etre.jpg";
import "../stylesCss/realisations.css";


export default function Realisations() {
    return (

        <section>

            <div className="banner"></div>

            <div className="text-center m-5 mb-2">

                <h2 className="main-title mt-5">PORTFOLIO</h2>

                <div className="d-flex justify-content-center align-items-center text-center" >
                    <p>Voici quelques-unes de mes réalisations.</p>
                </div>

                <hr className="trait-2 mx-auto m-0" style={{ width: "18%" }} />

            </div>

            <article className="content-art d-flex align-items-center flex-column gap-4 mb-5 mt-5 flex-md-row flex-md-wrap justify-content-md-start align-items-md-baseline col-lg-12 flex-lg-row justify-content-lg-center align-items-lg-baseline">

                <Portfolio

                    illustration_img={fresh_food}
                    description_img="Fresh food"
                    title_project="Fresh food"
                    realisation_description="Réalisation d'un site avec commande en ligne."
                    realisation_langage="Site réalisé avec PHP et MySQL"

                />

                <Portfolio

                    illustration_img={restaurant_akira}
                    description_img="Restaurant Akira"
                    title_project="Restaurant Akira"
                    realisation_description="Réalisation d'un site vitrine."
                    realisation_langage="Site réalisé avec WordPress"

                />

                <Portfolio

                    illustration_img={espace_bien_etre}
                    description_img="Espace bien-être"
                    title_project="Espace bien-être"
                    realisation_description="Réalisation d'un site vitrine pour un patricien de bien-être."
                    realisation_langage="Site réalisé en HTML/CSS"

                />

            </article>

        </section>

    );
}