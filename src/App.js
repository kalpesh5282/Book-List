import './App.css';



import Navbar from './Components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Categories from './Categories';
import Suppliers from './Suppliers';
import Home from './Home';
import Footer from './Components/Footer';


function App(){
  

 

  return(
    <div className='main-section'>
     <Navbar></Navbar>

     <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path ="/Categories" element={<Categories />} />
                <Route path = "/Suppliers" element={<Suppliers />}/> 
            </Routes>

       <Footer></Footer>
               
                </div>
    
  );
}
export default App;



