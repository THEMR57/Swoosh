import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'

import NewColectiosns from '../Components/NewCollections/NewCollections'
import { NewLestter } from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>

        <NewColectiosns/>
        <NewLestter/>

    </div>
  )
}
export default Shop


