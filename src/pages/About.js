import React from "react";
import about from "../assets/macaronAbout.jpg";
import "../styles/About.css";
import {Link} from "react-router-dom";

function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{backgroundImage: `url(${about})`}}
            ></div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut

                </p>
            </div>
            <h4>Je kunt ook <Link to="/signin">Inloggen</Link> of jezelf <Link to="/signup">Registreren</Link> als je nog geen account hebt.</h4>
        </div>
    );
}

export default About;
