import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card/Card";
import { Context } from "../../context/Context";
import { goBack } from "../../Routes/Cordinator";

export function Pokedex() {
  const navigate = useNavigate();
  const { pokedex, setPokedex } = useContext(Context);

  const removePoke = (id) => {
    const newPokemon = [...pokedex];
    const pokemonIndex = pokedex && pokedex.findIndex((item) => item.id === id);

    newPokemon.splice(pokemonIndex, 1);

    setPokedex(newPokemon);
  };

  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <button className="button-header" onClick={() => goBack(navigate)}>
              Voltar
            </button>
          </div>
          <div>
            <h1>Pokedex</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          {pokedex &&
            pokedex.map((pokemon) => {
              return (
                <Card
                  image={pokemon && pokemon.sprites.front_default}
                  alt={pokemon && pokemon.name}
                  name={pokemon && pokemon.name}
                  buttonName="Remover"
                  addRmPoke={() => removePoke(pokemon.id)}
                  pokeId={pokemon && pokemon && pokemon.id}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}
