
import { useEffect, useState } from 'react';
import './App.css';
import ProductsCard from './ProductsCard';

function App() {

  const [products, updateProducts] = useState([])

  /* for doing side effect operation fetching data(api calling) used useEffect */
  useEffect(
    () => {
      getProducts()
    }, []
  )

  /*this will fetch the data in the provided api uses*/
  async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products')
    let pList = await res.json()
    console.log(pList)
    updateProducts(pList)

  }


  if (products.length === 0) {
    return <>Fetching Data....please wait.....</>
  }

  return (
   <>
   <div className="product-list">
    { products.map((product)=><ProductsCard  {...product} key={product.id}/>)}
   </div>
   </>
  );
}

export default App;
