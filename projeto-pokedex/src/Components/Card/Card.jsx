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
    <div class="card">
      <div>
        <img
          src={props.image}
          alt={props.alt}
        />
      </div>
      <div class="button">
        <button onClick={props.addPoke}>{props.buttonName}</button>
        <button onClick={()=>(goToStats(props.pokeId))}>Ver Detalhes</button>
      </div>
    </div>
  );
}
