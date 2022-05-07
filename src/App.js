import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
           <Route path="/" element={<ItemListContainer job='Hero'/>} />
           <Route path="/item/:id" element={<ItemDetailContainer intro='Articulo'/>} />
           <Route path="/categoria/:categoriaid" element={<ItemListContainer job='Hero'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
