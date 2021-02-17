import React from 'react'
import "./Hero.scss";
import Contacts from '../contacts/Contacts';


export default function Hero() {
  return (
    <section className="hero"> 
      <Contacts />
      <h1 className="main__heading">АРЕНДА ЖИЛЬЯ ДЛЯ ВАШЕГО ОТПУСКА</h1>
    </section>
  )
}
