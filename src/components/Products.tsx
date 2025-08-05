import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/product'


const product1 = new Product(1, 'Proizvod 1', 'Opis proizvoda 1', 0);

interface ProductsProps {

    productsProps : Product[];


}

const products : React.FC<ProductsProps> = ({productsProps}) => {
  return (
    <div className='all-products'>
        <OneProduct productProps={productsProps[0]}/>
        <OneProduct productProps={productsProps[1]}/>
        <OneProduct productProps={productsProps[2]}/>
        <OneProduct productProps={productsProps[3]}/>
    </div>
  )
}

export default products