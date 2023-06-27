import logo from './logo.svg';
import './Base.css';

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
        </button>
      </div>
    </div>
  );
}



export default App;
