import React from 'react'
import "./Apartments.scss";

export default function Apartments() {
  return (
    <section className="apartments">
      <div className="container">
        <h2 className="section__heading">ДОСТУПНЫ ДЛЯ БРОНИРОВАНИЯ:</h2>
        <div className="apartments__wrapper apartments__wrapper--column">
          <a href="#" className="apartments__link">Больше варинатов:</a>
          <ul className="apartments__list">
            <li className="apartments__item">
              <img src="/img/ap-ph.jpg" alt="photo" className="apartments__photo"/>
              <div className="apartments__wrapper">
                <h3 className="apartments__heading">Апартаменты</h3>
                <p className="apartments__prise">от 1000 р.</p>
              </div>
              <p className="apartments__discription">Отдельностоящий дом со всеми удобствами. Подходит для большой семьи.</p>
              <div className="apartments__wrapper">
                <a className="apartments__link" href="http://">Подробнее</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
