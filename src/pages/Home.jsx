import React from "react";
import "../assets/home.css";

export default function Home() {
    return (
        <>
            <section>

                <div className="main_subtitle">
                    <h2>développeur web full stack</h2>
                </div>

                <div className="main_title">
                    <h1> John DOE </h1>
                </div>

                <p>
                    Actuellement dans une formation de développeur web & web mobile avec le Centre européen de formation Pour en découvrir davantage orienter vous sur le bouton En savoir
                    plus.
                </p>

                <a href="#a-propos" className='bouton-savoir-plus-home btn btn-primary text-light'>En savoir plus</a>

            </section>

            <section id="a-propos">

                <div className="titre-a-propos">
                    <h2> À propos </h2>
                </div>

                <div className="about_text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus
                        mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.
                        Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem.
                        Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.
                    </p>
                </div>

                <div className="conteneur">

                    <div className="titre-competences">
                        <h2>
                            Mes Compétences
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 pb_col" style={{ width: 424 }}>
                            <p className="mb-1 p-bar-titre">HTML5</p>
                            <div className="progress" style={{ width: 400 }}>
                                <div className=" progress-bar bg-danger" style={{ width: "80%" }}>80%</div>
                                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 pb_col" style={{ width: 424 }}>
                            <div className="mb-1 p-bar-titre">CSS</div>
                            <div className="progress" style={{ width: 400 }}>
                                <div className="progress-bar bg-danger" style={{ width: "80%" }}>80%</div>
                                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-6 pb_col" style={{ width: 424 }}>
                            <div className="mb-1 p-bar-titre">JavaScript</div>
                            <div className="progress" style={{ width: 400 }}>
                                <div className="progress-bar bg-danger" style={{ width: "70%" }}>70%</div>
                                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 pb_col" style={{ width: 424 }}>
                            <div className="mt-2 mb-1 p-bar-titre">VUE.JS</div>
                            <div className="progress" style={{ width: 400 }}>
                                <div className="progress-bar bg-danger" style={{ width: "50%" }}>50%</div>
                                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 pb_col" style={{ width: 424 }}>
                            <div className="mt-2 mb-1 p-bar-titre">REACT</div>
                            <div className="progress" style={{ width: 400 }}>
                                <div className="progress-bar bg-danger" style={{ width: "50%" }}>50%</div>
                                <div className="progress-bar" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <div className="full-page-background"></div>
        </>
    );
}
