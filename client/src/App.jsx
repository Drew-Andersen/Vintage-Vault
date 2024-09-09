import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Header/>
          <Outlet/>
        <Footer className='footer' />
      </div>
    </>
  )
}

export default App
