import './App.css';
import ProductItem from './components/productItem'
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
    
    <div className= "products">
    <ProductItem />
    </div>

    <div className= "counter">
    <Counter />
    </div>
    
    </div>
  );
}

export default App;
