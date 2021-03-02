import React from 'react'
import "./Apartments.scss";
import Apartments_card from '../apartments/Apartments_card';;

export default function Apartments() {
  return (
    <section className="apartments">
      <div className="container">
        <h2 className="section__heading">ДОСТУПНЫ ДЛЯ БРОНИРОВАНИЯ:</h2>
        <div className="apartments__wrapper apartments__wrapper--column">
          <a href="#" className="apartments__link">Больше варинатов:</a>
          <ul className="apartments__list">
            <Apartments_card />
            <Apartments_card />
            <Apartments_card />
          </ul>
        </div>
      </div>
    </section>
  )
}
