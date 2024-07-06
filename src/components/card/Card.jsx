import React from 'react';
import './cardStyle.css';

export const Card = ({ url, titulo='Sin título', descripcion="No hay texto", urlHover, year, gender }) => {
  return (
    
    <div className="card">
      <div className="initial-content">
        <img src={url} alt="imagen" />
      </div>
      <div className="hover-content">
        <div className="content">
          <h1>{titulo}</h1>
          <p className="description">{descripcion}</p>
          <p className="año">Año: {year}</p>
          <p className="género">Género: {gender}</p>
          <button>Ver en línea</button>
        </div>
        <div className="img-hover">
          <img src={urlHover} alt="imagen hover" />
        </div>
      </div>
    </div>
  );
};
