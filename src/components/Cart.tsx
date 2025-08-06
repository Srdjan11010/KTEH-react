import React from 'react'
import OneProduct from './OneProduct'
import { Product } from '../models/product'


interface ProductsProps {

    productsProps : Product[];
    onAdd : (id: number) => void;
    onRemove : (id: number) => void;

}

const Cart : React.FC<ProductsProps> = ({productsProps, onAdd, onRemove}) => {
  return (
    <div className='all-products'>
        {productsProps.map((productMap) => (
            <OneProduct key={productMap.id} productProps={productMap} onAdd={() => onAdd(productMap.id)} onRemove={() => onRemove(productMap.id)}/>
        ))}
    </div>
  )
}

export default Cart