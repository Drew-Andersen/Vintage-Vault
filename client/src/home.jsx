import React from 'react';
import './src/home.css'; // CSS file to style the page

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <h1>Vintage Vault</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button>Search</button>
        </div>
        <div className="auth-links">
          <a href="/signup">Sign-up</a>
          <a href="/login">Login</a>
        </div>
      </header>

      {/* Era Section */}
      <div className="era-buttons">
        <button>70's era</button>
        <button>80's era</button>
        <button>90's era</button>
        <button>00's era</button>
      </div>

      {/* Build a Collection Section */}
      <div className="collection-builder">
        <h2>80's</h2>
        <div className="collection-items">
          <div className="collection-item">Records</div>
          <div className="collection-item">Clothing</div>
          <div className="collection-item">Games</div>
          <div className="arrow-right">➔</div>
        </div>
      </div>

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

      {/* watches section */}
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

      {/* footer */}
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
};

export default Home;
