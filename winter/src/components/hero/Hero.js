import React from 'react'
import "./Hero.scss";
import Contacts from '../contacts/Contacts';

export default function Hero() {
  return (
    <section className="hero"> 
      <div className="container">
        <div className="hero__wrapper">
          <span className="hero__logo">RENT</span>
          <Contacts />
        </div>
        <h1 className="main__heading">АРЕНДА ЖИЛЬЯ ДЛЯ ВАШЕГО ОТПУСКА</h1>
      </div>
    </section>
  )
}
