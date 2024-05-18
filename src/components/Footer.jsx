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
            <div className="background d-flex flex-column p-3 flex-md-row flex-md-wrap p-md-5 flex-lg-row justify-content-lg-center" style={{ backgroundColor: "#EEE" }}>
                <div className="col-md-6 col-lg-3">
                    <h3 className='fs-5'>John Doe</h3>
                    <address className="col-7 col-md-6 m-0">
                        <a className="bloc-footer" href="https://maps.app.goo.gl/nL94idcaVvr5Q24u6" target="_blank">
                            40 rue Laure Diebold
                            69009 Lyon, France</a>
                    </address>

                    <a className="bloc-footer col-md-12" href="tel:0620304050">Téléphone : 06 20 30 40 50</a>

                    <div className='d-flex gap-4 mt-3 mb-1 m-md-0 mt-md-4'>

                       <Link to="/github-john-doe" rel="noreferrer"><img className="img" src={github} alt="github" /></Link>

                        <a className="text-dark" target="_blank" rel="noreferrer" href="http://twitter.com/"><img className="img" src={twitter} alt="twitter" /></a>
                        <a className="text-dark" target="_blank" rel="noreferrer" href="http://linkedin.com/"><img className="img" src={linkeldin} alt="linkedin" /></a>
                    </div>
                </div>

                <div className="gap-sm-5 mb-2 mb-md-1 col-md-6 col-lg-3">
                    <h3 className='fs-5'>Liens utiles</h3>
                    <div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/">Accueil</Link></div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/#a-propos">À propos</Link></div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/services">Services</Link></div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/contacter">Me contacter</Link></div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/mentions-legales">Mentions Légales</Link></div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <h3 className='fs-5'>Mes dernières réalisations</h3>
                    <div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/réalisations">Fresh food</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/réalisations">Restaurant Akira</Link></div>
                        <div><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/réalisations">Espace bien-être</Link></div>
                    </div>
                </div>

                <div className="mt-2 col-md-6 col-lg-3 m-lg-0 ">
                    <h3 className='fs-5'>Mes derniers articles</h3>
                    <div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/blog">Coder son site en HTML/CSS</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/blog">Vendre ses produits sur le web</Link></div>
                        <div ><img className="img" src={angle_droit} alt="fleche-droite" /><Link className="bloc-footer" to="/blog">Se positionner sur Google</Link></div>
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