import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/product'


const product1 = new Product(1, 'Proizvod 1', 'Opis proizvoda 1', 0);

interface ProductsProps {

    productsProps : Product[];
    onAdd : (id: number) => void;
    onRemove : (id: number) => void;

}

const products : React.FC<ProductsProps> = ({productsProps, onAdd, onRemove}) => {
  return (
    <div className='all-products'>
        {/* <OneProduct productProps={productsProps[0]}/>
        <OneProduct productProps={productsProps[1]}/>
        <OneProduct productProps={productsProps[2]}/>
        <OneProduct productProps={productsProps[3]}/> */}
        {/* map */}
        {productsProps.map((productMap) => (
            <OneProduct key={productMap.id} productProps={productMap} onAdd={() => onAdd(productMap.id)} onRemove={() => onRemove(productMap.id)}/>
        ))}
    </div>
  )
}

export default products