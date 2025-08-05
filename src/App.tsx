import './App.css';
import NavBar from './components/NavBar';
import Products from './components/products';
import { Product } from './models/product'


const producst: Product[] = [

  new Product(1, 'Proizvod 1', 'Opis proizvoda 1', 0),
  new Product(2, 'Proizvod 2', 'Opis proizvoda 2', 0),
  new Product(3, 'Proizvod 3', 'Opis proizvoda 3', 0),
  new Product(4, 'Proizvod 4', 'Opis proizvoda 4', 0),

];

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Products productsProps = {producst}/>
    </div>
  );
}

export default App;
