import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './home.css'; 
import { Link, useNavigate } from 'react-router-dom';
import CarouselSlider from '../../components/carousel/Carousel';
// import { getAllItems } from '../../utils/API';

const Home = () => {
  const navigate = useNavigate();

  // Needed for itemRetreival and mapping over items
  const [allItems, setAllItems] = useState([]);

  // Needed for loading items on the page on page load
//   useEffect(() => {
//     itemRetreival();
// }, [])

  // navigate to cart page on cart button click
  const goToCart = () => {
    navigate('/cart');
  };

  /* Needed to map over all items */
  // const itemRetreival = async (e) => {
  //   try {
  //     const response = await getAllItems();
  //     const items = await response.json();
  //     console.log(items);
  //     setAllItems(items);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  /* Need a function to add an item to the cart */
  // const handleAddItemToCart = () => {

  // }

  return (
    <div className="home-container">

      {/* Build a Collection Section */}
      <CarouselSlider />

      {/* Comic Books Section */}
      <section className="item-section">
        <h3>70's</h3>
        <div className="items-grid">
          {/* ---------- Map over all the items in the db --------
          {allItems.length > 0 && allItems.map((item) => (
            <div className='d-flex justify-content-center' key={item._id}>
              <div className='item-card m-2 w-50'>
                <div className='item-image'>
                  <img src={item.imageURL} alt={item.name} />
                </div>
                <div className='text-center'>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
                <div className='text-center'>
                  <button className='btn btn-primary' onClick={handleAddItemToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
           */}
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
