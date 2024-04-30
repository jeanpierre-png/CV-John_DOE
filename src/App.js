import React from "react";
import { Routes, Route, } from "react-router-dom";
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


export default function App() {
    return (

        <div className="App">
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/réalisations" element={<Realisations />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/contacter" element={<Contact />}></Route>
                <Route path="/mentions-legales" element={<MentionsLegales/>}></Route>
                <Route path="/github-john-doe" element={<Github/>}></Route>
            </Routes>

           <Footer/>
           
           

        </div> 
        
        

    );
}

