import { useState, useEffect } from 'react';
import { getAllItems } from '../utils/API';
import './Era00s.css';

export default function Era90s() {
    const [era00Items, setEra00Items] = useState([]);
    const [loading, setLoading] = useState(true); // New state for loading
    const [error, setError] = useState(null); // New state for error

    useEffect(() => {
        console.log(`Fetching items...`);
        itemRetrieval();
    }, []);

    const itemRetrieval = async () => {
        setLoading(true); // Set loading to true when starting the fetch
        try {
            const response = await getAllItems();
            const items = await response.json();
            console.log(`Items retrieved:`, items);

            // Filter items to get only those from the "00" era
            const filteredItems = items.filter(item => item.era === "90");
            setEra00Items(filteredItems);

        } catch (err) {
            console.error(err);
            setError('Failed to fetch items.');
        } finally {
            setLoading(false); // Set loading to false after fetch is done
        }
    }

    const handleAddItemToCart = (item) => {
        console.log(`Adding item to cart`, item)

        const saveItems = JSON.parse(localStorage.getItem('cart')) || [];
        saveItems.push(item);
        localStorage.setItem('cart', JSON.stringify(saveItems));
    }

    return (
        <>
            <section className="item-section">
                <h3 className="text-center my-4">90's Era</h3>
                {loading && <p>Loading items...</p>}
                {error && <p className="error">{error}</p>}
                <div className="items-grid">
                    {era00Items.length > 0 ? (
                        era00Items.map((item) => (
                            <div className="item-card" key={item._id}> {/* Use a unique identifier */}
                                <div className='item-image'>
                                    <img src={item.imageURL} alt={item.name} />
                                </div>
                                <h4>{item.name}</h4>
                                <p>{item.description} from the {item.era} era.</p>
                                <p className="price">{item.price}</p>
                                <div className='text-center'>
                                    <button className='btn btn-primary add-to-cart' onClick={() => handleAddItemToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        !loading && <p>No items available for this era.</p> // Show message if not loading
                    )}
                </div>
            </section>
        </>
    );
}