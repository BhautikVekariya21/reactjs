import { useState } from 'react'
import { ProductOverviewOne } from './ProductOverviewOne';
import './App.css'
import { ProductThree } from './ProductThree';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ProductOverviewOne username="Nike" thanks="Thank You For Shopping With Us"/>
    <ProductThree one="Nike Air Max 90"/>
    </>
  )
}

export default App
