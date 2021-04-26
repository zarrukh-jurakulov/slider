import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from  'react-icons/fa'
import data from './data'
import './App.css';

function App() {

const [people, setPeople] = useState(data);
const [index, setIndex] = useState(0);

useEffect(()=>{
const lastIndex = people.length - 1;
if(index < 0){
  setIndex(lastIndex)
}
if(index > lastIndex){
  setIndex(0)
}
},[index,people]);

useEffect(()=>{
let slider =  setInterval(()=>{
    setIndex(index + 1)
  },3000);
  return ()=> clearInterval(slider)

},[index])

  return ( 
 <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <section className='section-center'>
    {people.map((person,personIndex) =>{
      const {id, image, name, title, quote} = person;
      // more stuff coming up
      let position = 'nextSlide';
      if(personIndex === index){
        position = 'activeSlide'
      }
      if (person === index - 1 || (index === 0 && people.length - 1)){
        position = 'lastSlide'
      }
      return <article className={position} key={id}>
        <img src={image} alt={name} className='person-img' />
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='quote'>{quote}</p>
        <FaQuoteRight className='icon' />
      </article>
    })}
    <button className='prev' onClick={()=> setIndex(index - 1)}><FiChevronLeft /></button>
    <button className='next' onClick={()=> setIndex(index + 1)}><FiChevronRight /></button>
    </section>
 </section>
  )
}

export default App;
