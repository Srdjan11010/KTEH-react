import React from 'react'
import { Product } from '../models/product'

interface OneProductProps {

    productProps: Product;
    onAdd: (id: number) => void;
    onRemove: (id: number) => void;
}

const OneProduct : React.FC<OneProductProps> = ({productProps, onAdd, onRemove}) => {

    const stil = {
        margin: 10,
        borderSyle: 'dashed'
    }

// function addToCart(){
//     console.log(`Dodat proizvod ${productProps.name} u korpu`);
//     productProps.amount++;
//     console.log(`Trenutna kolicina proizvoda ${productProps.id} je ${productProps.ammount}`);
// }

// function removeFromCart(){
//     console.log(`Oduzet proizvod ${productProps.name} iz korpe`);
//     productProps.amount--;
//     console.log(`Trenutna kolicina proizvoda ${productProps.id} je ${productProps.ammount}`);
// }

  return (
    <div className='card' style={stil}>
        <img className='card-img-top' src='https://picsum.photos/200' alt='Product image'/>
        <div className='card-body'>
            <h3 className='card-tittle'>{productProps.name}</h3>
            <p className='card-text'>{productProps.description}</p>
            <a className='btn' onClick={() => onAdd(productProps.id)}>+</a>
            <a className='btn' onClick={() => onRemove(productProps.id)}>-</a>
        </div>
    </div>
  )
}

export default OneProduct