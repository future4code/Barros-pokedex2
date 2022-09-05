import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card/Card";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { Context } from "../../context/Context";
import { goBack, goToStats } from "../../Routes/Cordinator";
import { URL } from "../../Constants/BASE_URL";

export function Pokedex() {
    const navigate = useNavigate()
    const { pokedex, setPokedex } = useContext(Context)

    console.log(pokedex);

    
    let allPokes = []
      if (pokedex) {
        for (const pokemon of pokedex) {
          const [ data ] = UseRequestData(`${URL}` + pokemon);
          allPokes.push(data)
        }
      }

    const removePoke = (id) => {
      const pokemonIndex = pokedex.findIndex((item) => item === id)
      const newPokemon = [...pokedex]

      newPokemon.splice(pokemonIndex, 1)

      setPokedex(newPokemon)
    }



      console.log(allPokes);
    
    return (
      <>
        <header>
          <div className="wrapper">
            <div>
              <button
                className="button-header"
                onClick={() => goBack(navigate)}
              >
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
            {allPokes &&
              allPokes.map((pokemon) => {
                return (
                  <Card
                    image={pokemon && pokemon.sprites.front_default}
                    alt={pokemon && pokemon.name}
                    name={pokemon && pokemon.name}
                    buttonName="Remover"
                    addRmPoke={() => removePoke(pokemon.id)}
                    onClick={() => goToStats(navigate)}
                    // pokeId={pokemon && pokemon.data && pokemon.data.id}
                  />
                );
              })}
            {/* <Card
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
            /> */}
          </div>
        </main>
      </>
    );
}