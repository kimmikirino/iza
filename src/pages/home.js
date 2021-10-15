import iza from '../iza6.png';
import whats from '../whatsapp.png';

const Home = () => {
  return <div className="App">
    <div className="board">
      <h1>PROCURA-SE</h1>
      <h2>IZA</h2>
      <p className="reward">RECOMPENSA R$500,00</p>
      <img src={iza} alt="Iza" />
      <p>Última vez vista em Pet shop Sumaré - Caraguatatuba - SP em 08/10/2021</p>
      <span>
        Por favor, entre em contato:
      </span>
      <a href="https://api.whatsapp.com/send?phone=5512997121083"><img src={whats} alt="whatsapp" className="whats" /> (12) 99712-1083</a>
    </div>
  </div>
}

export default Home