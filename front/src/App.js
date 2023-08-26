import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Inicio from "./components/layout/Inicio";
import Nos from "./components/layout/Nos";
import Footer from "./components/layout/Footer";
import ProductosPages from "./pages/ProductosPage";
import ContactoPag from './pages/ContactoPag';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/nosotros" element={<Nos/>}/>
          <Route path='/productos' element={<ProductosPages/>}/>
          <Route path='/contacto' element={<ContactoPag/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
