import React from 'react'
import "./Contacts.scss";

export default function Contacts() {
  return (
    <section className="contacts">
      <h2 className="section__heading visually-hidden">Контакты</h2>
      <ul className="contacts__list">
        <li className="contacts__item contacts__item--adress">
          <address className="contacts__adress">
            Крым, г. Алушта <br />
            с. Солнечногорское<br />
            ушл. Шоссейная 38 лит. А
          </address>
        </li>
        <li className="contacts__item">
          <a className="contacts__link contakts__link--tel" href="tel:+1234567890"> +7 978 *** ** ** </ a>
          <p className="contacts__discription">подберем, бесплатно забронируем</p>
        </li>
      </ul>
    </section>
  )
}
