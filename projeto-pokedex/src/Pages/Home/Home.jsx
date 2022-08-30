import { Card } from "../../Components/Card/Card";
import "./style.css";

export function Home() {
  return (
    <>
      <header>
        <div class="wrapper">
          <div>
            <button class="button-header">Ir para Pokedex</button>
          </div>
          <div>
            <h1>Lista de Pokemons</h1>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
          <Card image="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" />
        </div>
      </main>
    </>
  );
}
