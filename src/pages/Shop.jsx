import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import NewsCollection from '../components/NewsCollection/NewsCollection'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewsCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
