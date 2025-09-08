import React from 'react';
import './App.css';

// Importamos imágenes
import dulceImg from './assets/dulce.png';
import agridulceImg from './assets/agridulce.png';
import acidoImg from './assets/acido.png';
import mangoLogo from './assets/mango.png';

const productData = [
  {
    id: '1',
    name: 'Mango dulce',
    description: 'Trae lecherita, salsa de mora, pepitas de colores.',
    image: dulceImg,
  },
  {
    id: '2',
    name: 'Mango agridulce',
    description: 'Un equilibrio perfecto entre dulzura y un toque sutil de acidez.',
    image: agridulceImg,
  },
  {
    id: '3',
    name: 'Mango ácido',
    description: 'Trae sal, limon, tajin, pimienta.',
    image: acidoImg,
  },
];

const App = () => {
  return (
    <div className="app-container">
      {/* Banner de Mango Mix */}
      <div className="banner">
        <img
          src={mangoLogo}
          alt="Mango Mix Logo"
          className="banner-logo"
        />
      </div>

      {/* Contenedor para el contenido principal */}
      <div className="content-wrapper">
        {/* Sección de "Nuestros Productos" */}
        <section className="products-section">
          <h2 className="section-title">Nuestros Productos</h2>
          <div className="product-list">
            {productData.map(product => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
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
    </div>
  );
};

export default App;