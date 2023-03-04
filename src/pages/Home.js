import React from "react";
import {Link} from "react-router-dom";
import BannerImage from "../assets/macaron.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1> Altun Macarons </h1>

                <Link to="/macarons">
                    <button> Let's Taste!</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
