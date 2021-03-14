import React from 'react'
import "./Advantages.scss";

export default function AdvantagesItem() {
  return (
    <li className="advantages__item">
      <div className="advantages__prev">
        <img className="advantages__img" src="/img/adv-ph.png" alt="advantage" width="300" height="300"/>
      </div>      
      <p className="advantages__discription">Подходит для семейного отдыха</p>
    </li>
  )
}
