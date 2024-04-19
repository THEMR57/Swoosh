import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewColectiosns from '../Components/NewCollections/NewCollections'
import { NewLestter } from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewColectiosns/>
        <NewLestter/>

    </div>
  )
}
export default Shop


