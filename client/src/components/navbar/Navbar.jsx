import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './navbar.css';

import Auth from '../../utils/auth';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            // Navigate to the search results page with the query
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <>
            <nav className='w-100 d-flex justify-content-between'>
                <div className='d-flex'>
                    <h1 className='px-4 pt-2'>Vintage Vault</h1>
                </div>

                {/* Search Bar */}
                <div className="search-bar w-50">
                    <input
                        type="text"
                        className="search-input w-25"
                        placeholder="Search for anything"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                </div>

                <ul className='d-flex justify-content-end p-2 bg-navbar'>
                    <li className='px-3 py-1 mx-1'>
                        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    </li>
                    {Auth.loggedIn() ? (
                        <>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/dashboard' className={currentPage === '/dashboard' ? 'nav-link active' : 'nav-link'}>Dashboard</Link>
                            </li>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'} onClick={Auth.logout}>Logout</Link>
                            </li>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/cart' className={currentPage === '/cart' ? 'nav-link active' : 'nav-link'}><FaShoppingCart />Cart</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                            </li>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/signup' className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Sign-up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
}
