import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import './navbar.css';

import Auth from '../../utils/auth';

export default function Navbar() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <nav className='w-100 d-flex justify-content-between'>
                <h1 className='px-4 pt-2'>Vintage Vault</h1>
                <ul className='d-flex justify-content-end p-2 bg-navbar'>
                    <li className='px-3 py-1 mx-1'>
                        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    </li>
                    {Auth.loggedIn() ? (
                        <>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'} onClick={Auth.logout}>Logout</Link>
                            </li>
                            <li className='px-3 py-1 mx-1'>
                                <Link to='/cart' className={currentPage === '/cart' ? 'nav-link active' : 'nav-link'}><FaShoppingCart /> Cart</Link>
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
    )
}