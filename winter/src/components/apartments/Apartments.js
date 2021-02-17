import React from 'react'
import "./Apartments.scss";

export default function Apartments() {
  return (
    <section className="apartments">
      <h2 className="section__heading">ДОСТУПНЫ ДЛЯ БРОНИРОВАНИЯ:</h2>
      <ul className="apartments__list">
        <li className="apartments__item">
          <h3 className="apartments__heading">1</h3>
        </li>
        <li className="apartments__item">
          <h3 className="apartments__heading">2</h3>
        </li>
        <li className="apartments__item">
          <h3 className="apartments__heading">3</h3>
        </li>
      </ul>
    </section>
  )
}
