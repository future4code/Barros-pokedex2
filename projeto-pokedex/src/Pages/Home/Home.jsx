import { Card } from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { goToPokedex} from "../../Routes/Cordinator";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { URL } from "../../Constants/BASE_URL";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();

  const { pokedex, setPokedex } = useContext(Context);

  const addOnClick = (id) => {
    axios
      .get(URL + id)
      .then((response) => {
        setPokedex([...pokedex, response.data]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const removePoke = (id) => {
    const newPokemon = [...pokedex];
    const pokemonIndex = pokedex && pokedex.findIndex((item) => item.id === id);

    newPokemon.splice(pokemonIndex, 1);

    setPokedex(newPokemon);
  };

  const pokedexId =
    pokedex &&
    pokedex.map((element) => {
      return element.id;
    });

  let allPokes = [];

  const getPokemons = () => {
    for (let id = 1; id < 21; id++) {
      const [data] = UseRequestData(`${URL}` + id);

      allPokes.push({ data });
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
                  buttonName={
                    pokedexId.includes(pokemon.data && pokemon.data.id)
                      ? "Remover"
                      : "Adicionar"
                  }
                  addRmPoke={
                    pokedexId.includes(pokemon.data && pokemon.data.id)
                      ? () => removePoke(pokemon.data.id)
                      : () => addOnClick(pokemon.data.id)
                  }
                  pokeId={pokemon.data && pokemon.data.id}
                />
              );
            })}
        </div>
      </main>
    </>
  );
}
