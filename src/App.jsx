import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; // Correct import for main slick CSS
import "slick-carousel/slick/slick-theme.css"; // Correct import for theme CSS
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
    description: 'Trae sal, limón, tajín, pimienta.',
    image: acidoImg,
  },
];

const App = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <div className="app-container">
      <div className="banner">
        <img 
          src={mangoLogo} 
          alt="Mango Mix Logo" 
          className="banner-logo"
        />
      </div>

      <section className="products-section">
        <h2 className="section-title">Nuestros Productos</h2>
        <Slider {...settings} className="product-carousel"> 
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
        </Slider>
      </section>

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