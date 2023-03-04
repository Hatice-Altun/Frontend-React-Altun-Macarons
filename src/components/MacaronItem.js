import React from "react";

function MacaronItem({image, name, price}) {
    return (
        <div className="macaronItem">
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h1> {name} </h1>
            <p> € {price} </p>
        </div>
    );
}

export default MacaronItem;
