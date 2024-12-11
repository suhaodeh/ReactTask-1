
import React,{useState} from 'react'

export default function App() {
 const [counter,setcounter]= useState(0);
 const [isVisible, setIsVisible] = useState(false);
 const product = {
  name: 'iphone',
  price: '1200$',
  description: 'this is iphone'
};
 const increase= ()=>{
  setcounter(counter+1);
 }
 
 const handleToggleProduct = () => {
  setIsVisible(!isVisible);
};

  return (
    <div>
    <div>
<h2>counter is {counter}</h2>
<button onClick={increase} className='btn btn-success'>increase</button>
    </div>
   
  

  <div>
  <button onClick={handleToggleProduct} > {isVisible ? 'hide product' : 'show product'} </button>
  </div>
  {isVisible && (
    <div>
     <div>
          <h3> product name: {product.name}</h3>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
        </div>
    </div>
   
)}
  </div>
  
  );
}





 


