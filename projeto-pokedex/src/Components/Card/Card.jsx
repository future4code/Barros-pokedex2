import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

export function Card(props) {
  const navigate = useNavigate();
  const pokeId = useParams();

  const goToStats = (pokeId) => {
    navigate(`/stats/${pokeId}`);
  };

  return (
    <div className="card">
      <div>
        <img
          src={props.image}
          alt={props.alt}
        />
      </div>
      <p>{props.name}</p>
      <div className="button">
        <button onClick={props.addRmPoke}>{props.buttonName}</button>
        <button onClick={()=>(goToStats(props.pokeId))}>Ver Detalhes</button>
      </div>
    </div>
  );
}
