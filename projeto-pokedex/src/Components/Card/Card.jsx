import React from "react";
import "./style.css";

export function Card(props) {
  return (
    <div class="card">
      <div>
        <img
          src={props.image}
          alt="pokemon"
        />
      </div>
      <div class="button">
        <button>Adicionar</button>
        <button onClick={props.onClick}>Ver Detalhes</button>
      </div>
    </div>
  );
}
