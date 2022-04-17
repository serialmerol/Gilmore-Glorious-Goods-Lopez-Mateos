import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer job='Hero'/>

      <div>
        <h2 className='underline'>ITEMS</h2>
        <li>The list pepperbox</li>
        <li>Sarenrae lock</li>
        <li>Simon the one eye snake belt</li>
        <li>Mantle of the Tempest</li>
      </div>
    </div>
  );
}

export default App;
