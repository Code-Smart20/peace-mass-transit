
import './App.css';
import Nav from './components/nav/Nav';
import { CssBaseline } from '@mui/material';
import Homescreen from './Pages/Homescreen';
import Footer from './components/footer/Footer';
import { Route,Routes } from 'react-router-dom';
import Travel from './Pages/Travel';
import Terminals from './Pages/Terminals';
import Shop from './Pages/Shop';
import Tech from './Pages/Tech';
import Blog from './Pages/Blog';
import Rout from './Pages/Rout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faqs from './Pages/Faqs';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Booking from './Pages/Booking';
import Agents from './components/homeComponents/agent/Agents';


function App() {
  return (
    <div className="app">
        <CssBaseline/>
         <Nav/>
         
         <Routes>
          {/*  Nav component routes */}

           <Route path = '/' element={<Homescreen/>}></Route>

           <Route path = '/Travel' element={<Travel/>}></Route>

           <Route path = '/Terminals' element={<Terminals/>}></Route>

           <Route path = '/Rout' element={<Rout/>}></Route>

           <Route path = '/Shop' element={<Shop/>}></Route>

           <Route path = '/Tech' element={<Tech/>}></Route>

           <Route path = '/Blog' element={<Blog/>}></Route>


            {/*  Footer component routes */}
                {/*  Footer component routes column 2*/}   

            <Route path='/About' element={<About/>}></Route>
            
            <Route path='/Blog' element={<Blog/>}></Route>
          
            <Route path='/Contact-us' element={<Contact/>}></Route>

            <Route path="/Faqs" element={<Faqs/>}></Route>
          
            <Route path="/Privacy-policy" element={<Privacy/>}></Route>

            <Route path="/Terms-&-conditions" element={<Terms/>}></Route>

                 {/*  Footer component routes column 3*/}   
          
            <Route path='/Book-a-seat' element={<Booking/>}></Route>

            <Route path="/Reservation-status" element={<Reservation/>}></Route>
          
            <Route path='/Travel' element={<Travel/>}></Route>

            <Route path='/Blog' element={<Blog/>}></Route>
          
            <Route path="/Become-an-agent" element={<Agents/>}></Route>

                {/*  Footer component routes column 4*/}   

          
            <Route path='/About' element={<About/>}></Route>

            <Route path='/Blog' element={<Blog/>}></Route>
          
            <Route path='/About' element={<About/>}></Route>

            <Route path='/Blog' element={<Blog/>}></Route>
          
            <Route path='/About' element={<About/>}></Route>

            <Route path='/Blog' element={<Blog/>}></Route>
          
            <Route path='/About' element={<About/>}></Route>

            <Route path='/Blog' element={<Blog/>}></Route>
          



         </Routes>
        
         <Footer/>
        
    </div>
  );
}

export default App;
