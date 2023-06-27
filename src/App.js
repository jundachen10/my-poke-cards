import './Base.css';

export let img = "";
export let back = "https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg";

let back_img = back
let front_img = "";


function App() {
  return (
    <div className="card">
      <div class="card__translater">
        <button class="card__rotator">
          <img class="card__back"
          src={back_img}
          width="660"
          height="921"
          />
          <div class="card__front">
            <img
            src={front_img}
            width="660"
            height="921"
            />
          </div>
          <div class="card__shine"></div>
          <div class="card__glare"></div>
        </button>
      </div>
    </div>
  );
}



export default App;
