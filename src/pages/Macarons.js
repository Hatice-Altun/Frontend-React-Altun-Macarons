import React from "react";
import {MacaronList} from "../array/MacaronList";
import MacaronItem from "../components/MacaronItem";
import "../styles/Macarons.css";

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
        </div>
    );
}

export default Macarons;
