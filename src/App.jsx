import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from './components/template/Logo'
import Footer from './components/template/Footer';
import Nav from './components/template/Nav'
import { BrowserRouter } from 'react-router-dom'
import Router from '../src/Router'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Logo />
          <Nav />
          <Router/>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
