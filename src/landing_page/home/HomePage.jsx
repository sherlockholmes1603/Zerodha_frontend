import React from "react";
import Hero from "./Hero";
import Education from "./Education";
import Stats from "./Stats";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
            <Footer></Footer>
        </>
    );
}

export default HomePage;
