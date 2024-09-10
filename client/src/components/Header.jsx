import Navbar from "./navbar/Navbar";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <>
            <Navbar />
            <div className="era-cart-bar">
                <div className="era-buttons">
                    <Link to='era-70'><Button variant="secondary" className='text-dark'>70's era</Button>{' '}</Link>
                    <Link to='era-80'><Button variant="secondary" className='text-dark'>80's era</Button>{' '}</Link>
                    <Link to='era-90'><Button variant="secondary" className='text-dark'>90's era</Button>{' '}</Link>
                    <Link to='era-00'><Button variant="secondary" className='text-dark'>00's era</Button>{' '}</Link>
                </div>
            </div>
        </>
    )
}