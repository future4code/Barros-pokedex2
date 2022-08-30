import "./style.css";

export function Stats() {


    return (
      <>
        <header>
          <div class="wrapper">
            <div>
              <button class="button-header">Voltar</button>
              <button class="button-pokedex">Ir para pokedex</button>
            </div>
            <div>
              <h1>Pokemon Stats</h1>
            </div>
          </div>
        </header>

        <main>
          <div class="inner">
            <section class="images">
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
            <section class="stats">
              <p>HP:</p>
              <p>Attack:</p>
              <p>Defense:</p>
              <p>Special-atack:</p>
              <p>Special-defense:</p>
              <p>Speed</p>
            </section>
            <section class="detail">
              <div class="type">
                <p>type 1</p>
                <p>type 2</p>
              </div>
              <div class="move">
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
