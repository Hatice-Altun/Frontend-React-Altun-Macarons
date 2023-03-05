import React from "react";
import macaronsleft from "../assets/macaron12.jpg";
import "../styles/Contact.css";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <>
        <div className="contact">
            <div
                className="leftSide"
                style={{backgroundImage: `url(${macaronsleft})`}}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    <h4>Je kunt ook <Link to="/signin">Inloggen</Link> of jezelf <Link to="/signup">Registreren</Link>
        als je nog geen account hebt.</h4>
        </>

    );
}

export default Contact;
