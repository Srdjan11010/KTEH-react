import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/product'


const product1 = new Product(1, 'Proizvod 1', 'Opis proizvoda 1', 0);


const products = () => {
  return (
    <div className='all-products'>
        <OneProduct productProps={product1}/>
        <OneProduct productProps={product1}/>
        <OneProduct productProps={product1}/>
        <OneProduct productProps={product1}/>
    </div>
  )
}

export default products