import React from 'react'
import { Product } from '../models/product'

interface OneProductProps {

    productProps: Product;

}

const OneProduct : React.FC<OneProductProps> = ({productProps}) => {

    const stil = {
        margin: 10,
        borderSyle: 'dashed'
    }

  return (
    <div className='card' style={stil}>
        <img className='card-img-top' src='https://picsum.photos/200' alt='Product image'/>
        <div className='card-body'>
            <h3 className='card-tittle'>{productProps.name}</h3>
            <p className='card-text'>{productProps.description}</p>
            <a href="" className='btn'>+</a>
            <a href="" className='btn'>-</a>
        </div>
    </div>
  )
}

export default OneProduct