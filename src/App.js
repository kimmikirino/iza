import iza from './iza6.png';
// import fb from './fb.png';
import whats from './whatsapp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        jaqueline
      </header> */}
      <div className="board">
        <h1>PROCURA SE</h1>
        <h2>IZA</h2>
        <img src={iza} alt="Iza" />
        <p>Última vez vista em Pet shop Sumaré - Caraguatatuba - SP em 08/10/2021</p>
        <span>
          Por favor, entre em contato:
        </span>
        <a href="https://api.whatsapp.com/send?phone=5511954798687"><img src={whats} alt="whatsapp" className="whats" /> (11) 95479-8687</a>
        <a href="https://api.whatsapp.com/send?phone=5511973987530"><img src={whats} alt="whatsapp" className="whats" /> (11) 97398-7530</a>
        {/* <a href="https://www.facebook.com/izaperdida"><img src={fb} alt="facebook" className="fb" /> </a> */}
      </div>
    </div>
  );
}

export default App;