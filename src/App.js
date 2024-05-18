import React from "react";
import { Routes, Route, } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations"
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MentionsLegales from "./pages/MentionsLegales";
import Github from "./pages/Github";
import Footer from "./components/Footer";
import "./stylesCss/styles.css";
import arrow_top from "../src/assets/image/fleche-incurvee.png";


export default function App() {
    const [visible, visibles] = useState(false);

    useEffect(() => {

        function scroll() {
            if (window.scrollY > 300) {
                visibles(true);
            } else {
                visibles(false);
            }
        }

        window.addEventListener('scroll', scroll);

        return () => { 
            window.removeEventListener('scroll', scroll);
        };

    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (

        <div className="App">
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/réalisations" element={<Realisations />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/contacter" element={<Contact />}></Route>
                <Route path="/mentions-legales" element={<MentionsLegales />}></Route>
                <Route path="/github-john-doe" element={<Github />}></Route>
            </Routes>

            <footer>
                <Footer />
            </footer>

            {visible && (
                <button onClick={scrollToTop} className="scroll-btn">
                    <img className="arrow" src={arrow_top} alt= "flèche retour vers le haut de la page"/>
                </button>
            )}

        </div>

    );
}

