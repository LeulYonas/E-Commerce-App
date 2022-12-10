// import'./App.css';
// import Navbar from './components/Navbar';


// export default function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   )
// }











import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./components/ItemList";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  const [items, setItems] = useState([]);

  async function goGetTheData() {
    
    const resp = await fetch('https://fakestoreapi.com/products');  
    const items = await resp.json();
    console.log(items);
    setItems(items)
}

useEffect(() => {
  goGetTheData();
}, []);

  return (     
    <>
     <Navbar />
      <div className='container-fluid'>      
        <div className="row product-card">
          <ItemList items={items}/>  
        </div>
    </div>
    </>
  
  )
};

export default App;