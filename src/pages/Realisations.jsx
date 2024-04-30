import React from "react";
import Portfolio from "../components/Portfolio";
import bannerImage from "../assets/image/banner.jpg";
import fresh_food from "../assets/portfolio/fresh-food.jpg";
import restaurant_akira from "../assets/portfolio/restaurant-japonais.jpg";
import espace_bien_etre from "../assets/portfolio/espace-bien-etre.jpg";
import "../stylesCss/realisations.css";


export default function Realisations() {
    return (



        <section>

            <img className="image-banner" src={bannerImage} alt='banner' ></img>

            <div>

                <h2 className="main-title mt-5">PORTFOLIO</h2>

                <div className="d-flex justify-content-center align-items-center text-center mt-3" >
                    <p>Voici quelques-unes de mes réalisations.</p>
                </div>

                <hr className="mx-auto m-0" style={{ width: "14%" }} />

            </div>

            <article className="d-flex justify-content-center align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-md-wrap align-items-md-baseline gap-3 mt-5 mb-5 col-12 col-lg-12 justify-content-lg-center">

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