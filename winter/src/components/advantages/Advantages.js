import React from 'react'
import "./Advantages.scss";

import AdvantagesItem from '../advantages/AdvantagesItem';

export default function Advantages() {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="section__heading">ПОЧЕМУ СТОИТ ВЫБРАТЬ ИМЕННО НАС:</h2>
        <ul className="advantages__list">
          <AdvantagesItem />
          <AdvantagesItem />
          <AdvantagesItem />
          <AdvantagesItem />
        </ul>
      </div>
    </section>
  )
}
