import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './searchResults.css';

// mocks function to simulate an API call
const fetchSearchResults = async (query) => {
    // simulates search results. we can replace with our own real api.
    const allItems = [
        { id: 1, name: 'Vintage Phone', description: 'A classic 90s flip phone', price: '$99', imageUrl: 'https://example.com/vintage-phone.jpg' },
        { id: 2, name: 'Retro Camera', description: 'A film camera from the 80s', price: '$199', imageUrl: 'https://example.com/retro-camera.jpg' },
        // can add more mock items...
    ];

    // filtering items by query
    return allItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
};

export default function SearchResults() {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            fetchSearchResults(query).then(setSearchResults);
        }
    }, [query]);

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            {searchResults.length > 0 ? (
                <div className="items-grid">
                    {searchResults.map(item => (
                        <div className="item-card" key={item.id}>
                            <img src={item.imageUrl} alt={item.name} className="item-image" />
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p className="price">{item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No results found for your search.</p>
            )}
        </div>
    );
}
