import React from 'react'

const OneProduct = () => {
  return (
    <div className='card'>
        <img className='card-img-top' />
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