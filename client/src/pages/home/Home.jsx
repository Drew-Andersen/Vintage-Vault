import { useState, useEffect } from 'react';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import CarouselSlider from '../../components/carousel/Carousel';
import { getAllItems } from '../../utils/API';

const Home = () => {
  const navigate = useNavigate();

  // Needed for itemRetreival and mapping over items
  const [allItems, setAllItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Needed for loading items on the page on page load
  useEffect(() => {
    console.log(`Fetching items...`);
    itemRetreival();
  }, [])

  // navigate to cart page on cart button click
  const goToCart = () => {
    navigate('/cart');
  };

  /* Needed to map over all items */
  const itemRetreival = async () => {
    try {
      const response = await getAllItems();
      const items = await response.json();
      console.log(`Items retrieved:`, items);
      setAllItems(items);

    } catch (err) {
      console.log(err);
    }
  }

  /* Need a function to add an item to the cart */
  const handleAddItemToCart = (item) => {
    console.log(`Adding item to cart`, item)
    setCart(prevCart => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    })
  }

  return (
    <div className="home-container">

      {/* Build a Collection Section */}
      <CarouselSlider />

      {/* Comic Books Section */}
      <section className="item-section mx-5">
        <h3>All Items</h3>
        <div className="items-grid">
          {/* ---------- Map over all the items in the db -------- */}
          {allItems.length > 0 && allItems.map((item) => (
            <div className='item-card' key={item._id}>
              <img className='item-image' src={item.imageURL} alt={item.name} />
              <div className='text-center'>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
              <div className='text-center'>
                  <button className='btn btn-primary' onClick={() => handleAddItemToCart(item)}>Add to Cart</button>
                  {/* Add onClick={handleAddItemToCart(item)} to the button */}
                </div> 
            </div>
          ))}

          {/* {[...Array(6)].map((_, i) => (
            <div className="item-card" key={i}>
              <div className="item-image"></div>
              <p>Description</p>
              <p>$$$$$</p>
              <button>Add to Cart</button>
            </div>
          ))} */}
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
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
