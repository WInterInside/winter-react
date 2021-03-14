import React from 'react'
import "./Hero.scss";
import Contacts from '../contacts/Contacts';

export default function Hero(props) {
  return (
    <section className="hero"> 
      <div className="container">
        <div className="hero__wrapper">
          <span className="hero__logo">{props.logo}</span>
          <Contacts />
        </div>
        <h1 className="main__heading">АРЕНДА ЖИЛЬЯ ДЛЯ ВАШЕГО ОТПУСКА</h1>
      </div>
    </section>
  )
}
