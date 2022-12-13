import './App.css';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
  
  return (     
    <>    
      <Navbar />        
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        
                        
      </Switch>    
    </>  
  )
};

export default App;