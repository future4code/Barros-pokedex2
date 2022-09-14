import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToPokedex } from "../../Routes/Cordinator";
import { URL } from "../../Constants/BASE_URL";
import { useEffect, useState } from "react";
import axios from "axios";

export function Stats() {
  const navigate = useNavigate();
  const { pokeId } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();

  const getPokeDetails = () => {
    axios
      .get(`${URL}${pokeId}`, {})
      .then((response) => {
        setPokemonDetails(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    getPokeDetails();
  }, [`${URL}${pokeId}`]);

  const name = pokemonDetails && pokemonDetails.species.name;
  const photoPokeFront =
    pokemonDetails &&
    pokemonDetails.sprites &&
    pokemonDetails.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  const photoPokeback =
    pokemonDetails &&
    pokemonDetails.sprites &&
    pokemonDetails.sprites.versions["generation-v"]["black-white"].animated
      .back_default;
  const hp =
    pokemonDetails &&
    pokemonDetails.stats &&
    pokemonDetails.stats["0"].base_stat;
  const attack =
    pokemonDetails &&
    pokemonDetails.stats &&
    pokemonDetails.stats["1"].base_stat;
  const defense =
    pokemonDetails &&
    pokemonDetails.stats &&
    pokemonDetails.stats["2"].base_stat;
  const specialAtack =
    pokemonDetails &&
    pokemonDetails.stats &&
    pokemonDetails.stats["3"].base_stat;
  const specialDefense =
    pokemonDetails &&
    pokemonDetails.stats &&
    pokemonDetails.stats["4"].base_stat;
  const speed =
    pokemonDetails &&
    pokemonDetails.stats &&
    pokemonDetails.stats["5"].base_stat;
  const typePoke =
    pokemonDetails &&
    pokemonDetails.types &&
    pokemonDetails.types.map((tipo) => {
      return <span>{tipo.type.name}</span>;
    });
  const moves =
    pokemonDetails &&
    pokemonDetails.moves &&
    pokemonDetails.moves.map((move) => {
      return <p>{move.move.name}</p>;
    });
  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <button className="button-header" onClick={() => goBack(navigate)}>
              Voltar
            </button>
            <button
              className="button-pokedex"
              onClick={() => goToPokedex(navigate)}
            >
              Ir para pokedex
            </button>
          </div>
          <div>
            <h1>Pokemon Stats</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="inner">
          <section className="images">
            <div>
              <img src={photoPokeFront} alt="pokemon de frente" />
            </div>
            <div>
              <img src={photoPokeback} alt="pokemon de costas" />
            </div>
          </section>
          <section className="stats">
            <h1>{name}</h1>
            <p>HP: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Special-atack: {specialAtack}</p>
            <p>Special-defense: {specialDefense}</p>
            <p>Speed {speed}</p>
          </section>
          <section className="detail">
            <div className="type">
              <p>Type: {typePoke}</p>
            </div>
            <div className="move">
              <h5>Moves</h5>
              <p>{moves}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
