import React from "react";
import "./style.css";

function PicCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.testfunc(props.id)} className="push" alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PicCard;
