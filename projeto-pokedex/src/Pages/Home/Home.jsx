import { Card } from "../../Components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { goToPokedex, goToStats } from "../../Routes/Cordinator";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { URL } from "../../Constants/BASE_URL";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();
  // const [id, setId] = useState("");
  // const [dataPoke] = UseRequestData(`${URL}`);
  const { pokedex, setPokedex} = useContext(Context);
  const [ data, setData ] = useState()
  // const pokeId = useParams();

  
  const addOnClick = (id) => {

    // const newPoke = [...pokedex]
    axios
      .get(URL + id)
      .then((response) => {

        setPokedex([...pokedex, response.data]);
      })
      .catch((error) => {
        console.log(error.response);;
      });
    // newPoke.push(data);
    // setPokedex(newPoke);
  }

     const removePoke = (id) => {
       const newPokemon = [...pokedex];
       const pokemonIndex =
         pokedex && pokedex.findIndex((item) => item.id === id);

       newPokemon.splice(pokemonIndex, 1);

       setPokedex(newPokemon);
       console.log(newPokemon);
     };

  // console.log(pokedex);
  
  
  const pokedexId = pokedex && pokedex.map((element) => {
    return element.id;
  })
  console.log(pokedexId);
  
  let allPokes = [];

  const getPokemons = () => {
    for (let id = 1; id < 21; id++) {
      const [data] = UseRequestData(`${URL}` + id);

      // console.log(data);
      // console.log(data);

      allPokes.push({ data });

      // console.log(allPokes);
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
                  name={pokemon.data && pokemon.data.name}
                  buttonName={pokedexId.includes(pokemon.data && pokemon.data.id) ? "Remover" : "Adicionar"}
                  addRmPoke={pokedexId.includes(pokemon.data && pokemon.data.id) ? () => removePoke(pokemon.data.id) : () => addOnClick(pokemon.data.id)}
                  // onClick={() => goToStats(navigate)}
                  pokeId={pokemon.data && pokemon.data.id}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}
