import "./style.css";
import { useNavigate } from "react-router-dom";
import { goBack, goToPokedex } from "../../Routes/Cordinator";

export function Stats() {

    const navigate = useNavigate()


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
                  <li>move name 1</li>
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
