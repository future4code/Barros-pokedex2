import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card/Card";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { Context } from "../../context/Context";
import { goBack, goToStats } from "../../Routes/Cordinator";
import { URL } from "../../Constants/BASE_URL";
import axios from "axios";

export function Pokedex() {
    const navigate = useNavigate()
    const { pokedex, setPokedex } = useContext(Context)
    const [ allPokes, setAllPokes ] = useState([])

    console.log(pokedex);

    useEffect(()=>{
      if (pokedex.length<1) {
        setAllPokes(undefined)
      }
      if (pokedex) {
        const pp=[]
     
      for (const pokemon of pokedex) {
        axios.get(`${URL}` + pokemon)
        .then((response) => {
          pp.push(response.data)
          setAllPokes(pp)
        })
        .catch((err) => {
          console.log(err.response);
        })
      }
    }
    },[pokedex])
    
    // let allPokes = []
    // const getPokedex = () => {
    //   let pokedexData = [...pokedex]
    //   if (pokedex) {
    //     for (const pokemon of pokedexData) {
    //       const [ data ] = UseRequestData(`${URL}` + pokemon);
    //       allPokes.push(data)
    //     }
    //   }
    // }
    //  getPokedex();
    const removePoke = (id) => {
      const pokemonIndex = pokedex.findIndex((item) => item === id)
      const newPokemon = [...pokedex]

      newPokemon.splice(pokemonIndex, 1)

      setPokedex(newPokemon)
      console.log(newPokemon);
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
                    pokeId={pokemon && pokemon && pokemon.id}
                  />
                );
              })}
          </div>
        </main>
      </>
    );
}