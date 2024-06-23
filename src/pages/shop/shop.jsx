import React, {useContext} from 'react'
import { Product } from './product'
import { PRODUCTS } from '../../products'
import { DEMAPRODUCTS } from '../../demaProducts'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
            <h1>Dema Collections</h1>
        <div className='products'>
            {DEMAPRODUCTS.map (
                (product, index) =>
                 <Product key={index} data={product} />
            )}
        </div>
    </div>
  )
}
