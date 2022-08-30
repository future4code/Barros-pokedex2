import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card/Card";
import { goBack, goToStats } from "../../Routes/Cordinator";

export function Pokedex() {
    const navigate = useNavigate()
    
    return (
      <>
        <header>
          <div className="wrapper">
            <div>
              <button className="button-header" onClick={() => goBack(navigate)}>Voltar</button>
            </div>
            <div>
              <h1>Pokedex</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <Card
              image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png"
              onClick={() => goToStats(navigate)}
            />
            <Card
              image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png"
              onClick={() => goToStats(navigate)}
            />
            <Card
              image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png"
              onClick={() => goToStats(navigate)}
            />
          </div>
        </main>
      </>
    );
}