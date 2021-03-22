import React from 'react'
import "./Hero.scss";
import Contacts from '../contacts/Contacts';

export default function Hero(props) {
  return (
    <section className="hero"> 
      <div className="container">
        <div className="hero__wrapper">
          <a href="index.html" className="hero__link"><span className="hero__logo">{props.logo}</span>
          </a>
          <Contacts address="             
              Крым, г. Алушта
              с. Солнечногорское
              ул. Шоссейная 38 лит. А"/>
        </div>
        <h1 className="main__heading">АРЕНДА ЖИЛЬЯ ДЛЯ ВАШЕГО ОТПУСКА</h1>
      </div>
    </section>
  )
}
