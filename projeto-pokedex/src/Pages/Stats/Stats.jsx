import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToPokedex } from "../../Routes/Cordinator";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { URL } from "../../Constants/BASE_URL";
import { useEffect, useState } from "react";
import axios from "axios";

export function Stats() {

    const navigate = useNavigate()
    const {pokeId} = useParams();
    console.log("pokeId",pokeId)
    //const [dataDetails] = UseRequestData(`${URL}/${params.pokeId}`)
    const [pokemonDetails, setPokemonDetails] = useState()

    const getPokeDetails = () =>{
      axios
          .get(`${URL}${pokeId}`,{
          })
          .then((response)=>{setPokemonDetails(response.data)})
          .catch((erro)=>{console.log(erro)})
  }

  useEffect(()=>{
      getPokeDetails()
  },[`${URL}${pokeId}`])

  console.log("pokemonDetails",pokemonDetails)


    //console.log(dataDetails)
/*
    useEffect(() => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}/`)
      .then((response) => {
          setPokemonDetails(response.data);
          
      })
      .catch((error) => {
          console.log(error);
          
      });
    }, [ `https://pokeapi.co/api/v2/pokemon/${params.pokeId}/`]);

    */

    
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
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                  alt="pikachu front"
                />
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
                  alt="pikachu back"
                />
              </div>
            </section>
            <section className="stats">
              <p>HP:</p>
              <p>Attack:</p>
              <p>Defense:</p>
              <p>Special-atack:</p>
              <p>Special-defense:</p>
              <p>Speed</p>
            </section>
            <section className="detail">
              <div className="type">
                <p>type 1</p>
                <p>type 2</p>
              </div>
              <div className="move">
                <h5>Moves</h5>
                <ul>
                
                  <li>move name 2</li>
                  <li>move name 3</li>
                </ul>
              </div>
            </section>
          </div>
        </main>
      </>
    );
    
}
