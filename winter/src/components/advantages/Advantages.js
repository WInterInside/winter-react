import React from 'react'
import "./Advantages.scss";

export default function Advantages() {
  return (
    <section className="advantages">
      <h2 className="section__heading"></h2>
      <ul className="advantages__list">
        <li className="advantages__item">
          <p className="advantages__discription">Подходит для семейного отдыха</p>
        </li>
        <li className="advantages__item">
          <p className="advantages__discription">Море в пешей доступности</p>
        </li>
        <li className="advantages__item">
          <p className="advantages__discription">Трансфер из аэропорта</p>
        </li>
        <li className="advantages__item">
          <p className="advantages__discription">Удобная кухня кухня</p>
        </li>
      </ul>
    </section>
  )
}
