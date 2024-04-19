import React from 'react'
import './NewsLetter.css'

export const NewLestter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your emnail</h1>
      <p>Subscribe to our newslettre and saty updated</p>
      <div>
        <input type="email" placeholder="Your email Id"/>
        <button > SUBSCRIBE</button>
      </div>
    </div>
  )
}
