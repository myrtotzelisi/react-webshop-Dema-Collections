import React from 'react'
import { FacebookLogo, InstagramLogo } from 'phosphor-react';
import './footer.css'


export const Footer = () => {
  return (
    <footer>
        <div className='footerLinks'>
        <a href='https://www.facebook.com/dema.collections' target='_blank' rel='noopener noreferrer'><FacebookLogo color='white' size={32} /></a>
        <a href='https://www.instagram.com/dema.collections/' target='_blank' rel='noopener noreferrer'><InstagramLogo color='white' size={32} /></a>
        <a href='https://www.etsy.com/shop/DemaCollections' target='_blank' rel="noopener noreferrer" >Etsy shop</a>
        </div>
        <div className='copyright'>
            <p>Copyright © Dema Collections</p>
        </div>
    </footer>
  )
}
