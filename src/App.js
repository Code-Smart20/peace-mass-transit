
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Announcement from './components/annoucement/Announcement';
import Products from './components/products/Products';
import Agent from './components/agent/Agents'
import Footer from './components/footer/Footer';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="app">
        <CssBaseline/>
        <Nav/>
        <Header/>
        <Announcement/>
        <Services/>
        <Products/>
        <Agent/>
        <Footer/>
        
    </div>
  );
}

export default App;
