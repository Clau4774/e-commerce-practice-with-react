import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './routs/Home';

function App() {
  
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />}/>          
      </Routes>
      <Footer />
      
    </BrowserRouter>
  )
}

export default App
