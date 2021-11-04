import iza from '../iza6.png';
import whats from '../whatsapp.png';

const Home = () => {
  return <div className="App">
    <div className="board">
      <h1>ENCONTRADA</h1>
      <h2>IZA</h2>
      <img src={iza} alt="Iza" />
      <p>Última vez vista em Pet shop Sumaré - Caraguatatuba - SP em 08/10/2021</p>
      <span>
        Por favor, entre em contato:
      </span>
    </div>
  </div>
}

export default Home