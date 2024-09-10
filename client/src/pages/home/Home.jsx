import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import './home.css'; // CSS file to style the page
import { Link, useNavigate } from 'react-router-dom';
import CarouselSlider from '../../components/carousel/Carousel';


const Home = () => {
  const navigate = useNavigate();

  // navigate to cart page on cart button click
  const goToCart = () => {
    navigate('/cart');
  };
  
  
  return (
    <div className="home-container">

    {/* Build a Collection Section */}
    <CarouselSlider />

      {/* Comic Books Section */}
      <section className="item-section">
        <h3>70's</h3>
        <div className="items-grid">
          {[...Array(6)].map((_, i) => (
            <div className="item-card" key={i}>
              <div className="item-image"></div>
              <p>Description</p>
              <p>$$$$$</p>
            </div>
          ))}
        </div>
      </section>

      {/* Watches Section */}
      <section className="item-section">
        <h3>Watches</h3>
        <div className="items-grid">
          {[...Array(6)].map((_, i) => (
            <div className="item-card" key={i}>
              <div className="item-image"></div>
              <p>Description</p>
              <p>$$$$$</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
