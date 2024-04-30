import React from "react";
import "../stylesCss/footer.css";
import { Link } from "react-router-dom";
import github from "../assets/Footer/github.png";
import twitter from "../assets/Footer/signe-twitter.png";
import linkeldin from "../assets/Footer/linkedin-2.png";
import angle_droit from "../assets/Footer/angle-droit.png";
import copyright from "../assets/Footer/droits-d-auteur.png";



export default function Footer() {


    return (
        <>
            <div className="background d-flex flex-column flex-md-row flex-lg-row justify-content-lg-center p-5" style={{ backgroundColor: "#EEE" }}>
                <div className="col-md-3">
                    <h3 className='fs-4'>John Doe</h3>
                    <address>
                        40 rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Téléphone : 06 20 30 40 50
                    </address>
                    <div className='d-flex gap-4'>
                        <Link to="/github-john-doe" rel="noreferrer"><img className="img" src={github} alt="github" /></Link>

                        <a className="text-dark" target="_blank" rel="noreferrer" href="http://twitter.com/"><img className="img" src={twitter} alt="twitter" /></a>
                        <a className="text-dark" target="_blank" rel="noreferrer" href="http://linkedin.com/"><img className="img" src={linkeldin} alt="linkedin" /></a>
                    </div>
                </div>

                <div className="col-md-3 gap-sm-5 ">
                    <h3 className='fs-5'>Liens utiles</h3>
                    <div className="">
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/">Accueil</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/#a-propos">À propos</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/services">Services</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/contacter">Me contacter</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/mentions-legales">Mentions Légales</Link></div>
                    </div>
                </div>

                <div className="col-md-3">
                    <h3 className='fs-5'>Mes dernières réalisations</h3>
                    <div >
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/réalisations">Fresh food</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/réalisations">Restaurant Akira</Link></div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/réalisations">Espace bien-être</Link></div>
                    </div>
                </div>

                <div className="col-md-3">
                    <h3 className='fs-5'>Mes derniers articles</h3>
                    <div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/blog">Coder son site en HTML/CSS</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/blog">Vendre ses produits sur le web</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link to="/blog">Se positionner sur Google</Link></div>
                    </div>
                </div>
            </div>
            <small className='z-1'>
                <div className='d-flex flex-column align-items-center justify-content-center gap-1 bg-dark p-3'>
                    <div className='d-flex justify-content-center align-items-center gap-1'>
                        <img className="copyright" src={copyright} alt="symbole de copyright" />
                        <span className='fs-9 text-light'>Designed by John Doe</span>
                    </div>
                </div>
            </small>
        </>
    )
}