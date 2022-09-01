import { Card } from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { goToPokedex, goToStats } from "../../Routes/Cordinator";
import UseRequestData from "../../Components/Hooks/UseRequestData";
import { URL } from "../../Constants/BASE_URL";

export function Home() {

  const navigate = useNavigate()
  const [dataPoke] = UseRequestData(`${URL}`)

  console.log(dataPoke)
  return (
    <>
      <header>
        <div className="wrapper">
          <div>
            <button className="button-header" onClick={() => goToPokedex(navigate)}>Ir para Pokedex</button>
          </div>
          <div>
            <h1>Lista de Pokemons</h1>
          </div>
        </div>
      </header>

      <main>

        {dataPoke&&dataPoke.results&&dataPoke.results.map((pokemon)=>{
          return(
            <Card
            image={pokemon.url}
            alt={pokemon.name}
            onClick={() => goToStats(navigate)}
            />
          )
        })}

        {/*
        <div className="container">
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" onClick={() => goToStats(navigate)} />
        </div>
        */}
      </main>
    </>
  );
}
