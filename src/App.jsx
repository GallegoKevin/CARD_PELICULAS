import React from 'react';
import './App.css';
import { Card } from './components/card/Card';
import Json from '../peliculas.json';

function App() {
  const cards = Json.NETFLIX.películas.map((e, index) => (
    <Card
      key={`${e.título}-${e.Año}-${index}`}
      url={e.url_principal}
      titulo={e.título}
      descripcion={e.descripción}
      year={e.Año}
      gender={e.género}
      urlHover={e.url_hover}
    />
  ));

  return (
    <>
      <header>
        <h1 className='title'>NETFLIX</h1>
      </header> 
      <div className='context'>
        <span>
          "Explora un universo infinito de películas en Netflix, donde cada historia espera ser descubierta. Desde emocionantes aventuras hasta conmovedores dramas, nuestra cartelera te ofrece un viaje cinematográfico sin límites. Sumérgete en el cine de Netflix y deja que cada película te transporte a nuevos mundos."
        </span>
      </div>

      <h2 className='title-card'>PELÍCULAS</h2>
      <div className="card-container">
        {cards}
      </div>
    </>
  );
}

export default App;

