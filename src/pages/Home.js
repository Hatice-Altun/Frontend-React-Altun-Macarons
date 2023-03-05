import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/macaron.jpg";
import "../styles/Home.css";
import Macarons from "./Macarons";
import Contact from "./Contact";

function Home() {
    return (
        <>
            <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
                <div className="headerContainer">
                    <h1> Altun Macarons </h1>
                    <Link to="/macarons">
                        <button> Let's Taste!</button>
                    </Link>
                </div>
            </div>
            <h4>Je kunt ook <Link to="/signin">Inloggen</Link> of jezelf <Link to="/signup">Registreren</Link>
                als je nog geen account hebt.</h4>
            <Macarons/>
            <Contact/>
        </>
    );
}

export default Home;
