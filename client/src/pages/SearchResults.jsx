import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllItems } from '../utils/API';
import './searchResults.css';

export default function SearchResults() {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const [categoryItems, setCategoryItems] = useState([]);
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            fetchSearchResults(query).then(setSearchResults);
        }
    }, [query]);

    const fetchSearchResults = async (query) => {
        try {
            const response = await getAllItems();
            const items = await response.json();
            console.log(`Items retrieved:`, items);

            const filteredItems = items.filter(item => item.category.toLowerCase() === `${query}`);
            setCategoryItems(filteredItems);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            <div className="items-grid">
                {categoryItems.length > 0 ? (
                    categoryItems.map((item) => (
                        <div className="item-card" key={item._id}>
                            <img src={item.imageURL} alt={item.name} className="item-image" />
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p className="price">{item.price}</p>
                            <div className='text-center'>
                                <button className='btn btn-primary add-to-cart' onClick={() => handleAddItemToCart(item)}>Add to Cart</button>
                            </div>
                        </div>

                    ))
                ) : (
                    <p>No results found for your search.</p>
                )}
            </div>
        </div>
    );
}
