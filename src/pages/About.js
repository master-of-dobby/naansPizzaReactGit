import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
        style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
      <div className='aboutBottom'>
          <h1 >ABOUT US</h1>
          <p>Welcome to <strong>NaAn's Pizzeria</strong> - where passion for pizza 
          meets convenience. We're committed
           to delivering exceptional, handcrafted pizzas to your doorstep. Our menu
            features the freshest ingredients and diverse flavors. Order online with
             ease and experience the finest in pizza delivery. Your satisfaction is 
             our top priority. Discover the love of pizza with us.</p>
    </div>
    </div>
  )
}

export default About
