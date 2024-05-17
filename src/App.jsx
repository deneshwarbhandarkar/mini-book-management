
import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Suppliers from './pages/Suppliers';
import Home from './pages/Home';
function App() {

  return (
    <div className='main-container'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
        <Route path="/Suppliers" element={<Suppliers />}></Route>
      </Routes>


    </div >

  );
}


export default App;