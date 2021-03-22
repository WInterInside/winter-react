import React from 'react'
import "./Smallhero.scss";
import Contacts from '../contacts/Contacts';

export default function Smallhero(props) {
  return (
    <section className="smallhero"> 
      <div className="container">
        <div className="smallhero__wrapper">
          <a href="index.html" className="smallhero__link"><span className="smallhero__logo">{props.logo}</span>
          </a>
          <Contacts address="Как нас найти?"/>
        </div>
        <h1 className="main__heading visually-hidden">АРЕНДА ЖИЛЬЯ ДЛЯ ВАШЕГО ОТПУСКА</h1>
      </div>
    </section>
  )
}
