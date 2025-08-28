import React from 'react';
import './App.css';

const productData = [
  {
    id: '1',
    name: 'Mango dulce',
    description: 'Trae lecherita, mermelada de mora, pepitas de colores.',
  },
  {
    id: '2',
    name: 'Mango mix',
    description: 'Un equilibrio perfecto entre dulzura y un toque sutil de acidez.',
  },
  {
    id: '3',
    name: 'Mango ácido',
    description: 'Trae sal, limon, tajin, pimienta.',
  },
];

const App = () => {
  return (
    <div className="app-container">
      {/* Banner de Mango Mix */}
      <div className="banner">
        <h1 className="banner-title">Mango Mix</h1>
      </div>

      {/* Sección de "Nuestros Productos" */}
      <section className="products-section">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="product-list">
          {productData.map(product => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer con Contáctanos */}
      <footer className="footer">
        <h2 className="footer-title">Contáctanos</h2>
        <div className="footer-info">
          <p><span role="img" aria-label="pin">📍</span> Neiva, Huila</p>
          <p><span role="img" aria-label="phone">📞</span> +57 320 4060793</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
