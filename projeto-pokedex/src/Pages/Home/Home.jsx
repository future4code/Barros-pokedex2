import { Card } from "../../Components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { goToPokedex, goToStats } from "../../Routes/Cordinator";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { URL } from "../../Constants/BASE_URL";
import { useState, useEffect } from "react";

export function Home() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [dataPoke] = UseRequestData(`${URL}`);
  // const [ allPokes, setAllPokes ] = useState([])
  // const [ dataSinglePoke ] = UseRequestData(`${URL}1`)
  const pokeId = useParams();

  let allPokes = [];

  const getPokemons = () => {
    for (let id = 1; id < 21; id++) {
      const [data] = UseRequestData(`${URL}` + id);

      console.log(data);
      console.log(data);

      allPokes.push({ data });

      console.log(allPokes);
    }
    return allPokes;
  };

  getPokemons();

  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <button
              className="button-header"
              onClick={() => goToPokedex(navigate)}
            >
              Ir para Pokedex
            </button>
          </div>
          <div>
            <h1>Lista de Pokemons</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {allPokes &&
            allPokes.map((pokemon) => {
              return (
                <Card
                  image={pokemon.data && pokemon.data.sprites.front_default}
                  alt={pokemon.data && pokemon.data.name}
                  onClick={() => goToStats(navigate)}
                  pokeId={pokemon.data && pokemon.data.id}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}
