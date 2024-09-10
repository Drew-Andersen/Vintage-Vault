import Navbar from "./navbar/Navbar";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './Header.css'; // Custom CSS for the header

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log(`Searching for: ${searchQuery}`);
    };

    return (
        <>
            <Navbar />
            <div className="header-container">
                {/* Era Buttons */}
                <div className="era-cart-bar">
                    <div className="era-buttons">
                        <Link to='era-70'><Button variant="secondary" className='text-dark'>70's era</Button>{' '}</Link>
                        <Link to='era-80'><Button variant="secondary" className='text-dark'>80's era</Button>{' '}</Link>
                        <Link to='era-90'><Button variant="secondary" className='text-dark'>90's era</Button>{' '}</Link>
                        <Link to='era-00'><Button variant="secondary" className='text-dark'>00's era</Button>{' '}</Link>
                    </div>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for anything"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button variant="primary" onClick={handleSearch}>Search</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
