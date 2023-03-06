import React from "react";
import "../styles/About.css";
import macaronRight from "../assets/aboutUS.jpg";


function About() {
    return (
        <>
            <div className="about">
                <div className="leftSide">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, eligendi, perspiciatis. Alias
                        amet aperiam aut corporis cupiditate dolorem doloremque ea eius eos esse exercitationem
                        explicabo id illo in iste maiores maxime neque nostrum odit pariatur porro quasi quia, quo quos
                        recusandae repellat sint sit suscipit tempora voluptatum. Aliquid aut commodi cumque doloremque
                        eius, fugiat hic in inventore laborum necessitatibus non, obcaecati perspiciatis praesentium
                        iam, veritatis? Deleniti dolorem dolores dolorum, eos est et excepturi explicabo incidunt inventore iste minima, nam nobis numquam omnis
                        pariatur perspiciatis quae quisquam quo ratione recusandae reiciendis repellat rerum sapiente
                        similique sit soluta suscipit, tempora ut voluptatem voluptatibus. Aliquid cumque expedita
                        magnam natus odit perspiciatis quas unde. Eius, modi, molestias! Corporis deleniti excepturi hic
                        illum numquam.</p>
                </div>
                <div
                    className="rightSide"
                    style={{backgroundImage: `url(${macaronRight})`}}>
                </div>
            </div>
        </>
    );
}

export default About;
