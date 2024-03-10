import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";


export default function App() {
    return (

        <div className="App">
            <NavBar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
            </Routes>

        </div>

    );
}

