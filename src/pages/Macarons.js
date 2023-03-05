import React from "react";
import {MacaronList} from "../products/MacaronList";
import MacaronItem from "../components/MacaronItem";
import "../styles/Macarons.css";
import {Link} from "react-router-dom";

function Macarons() {
    return (
        <div className="macaron">
            <h1 className="macaronTitle">Speciality Flavors</h1>
            <div className="macaronList">
                {MacaronList.map((macaronItem, key) => {
                    return (
                        <MacaronItem
                            key={key}
                            image={macaronItem.image}
                            name={macaronItem.name}
                            price={macaronItem.price}
                        />
                    );
                })}
            </div>
            <h4>Je kunt ook <Link to="/signin">Inloggen</Link> of jezelf <Link to="/signup">Registreren</Link> als je nog geen account hebt.</h4>
        </div>
    );
}

export default Macarons;
