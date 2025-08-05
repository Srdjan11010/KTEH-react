import React from 'react'

const OneProduct = () => {
  return (
    <div className='card' style={{margin: 10, borderStyle: 'solid'}}>
        <img className='card-img-top' src='https://picsum.photos/200' alt='Product image'/>
        <div className='card-body'>
            <h3 className='card-tittle'>Product name</h3>
            <p className='card-text'>Product description</p>
            <a href="" className='btn'>+</a>
            <a href="" className='btn'>-</a>
        </div>
    </div>
  )
}

export default OneProduct