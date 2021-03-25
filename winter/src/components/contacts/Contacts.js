import React from 'react'
import "./Contacts.scss";

export default function Contacts(props) {
  return (
    <section className="contacts">
      <h2 className="section__heading visually-hidden">Контакты</h2>
      <ul className="contacts__list contacts__list--full">
        <li className="contacts__item contacts__item--adress">
          <a href="https://yandex.ru/maps/977/republic-of-crimea/house/shosseynaya_ulitsa_38a/Z00YcwNjQEcDQFpufXt1eH1iZw==/?ll=34.544059%2C44.749020&z=19" className="contacts__map">
            <svg className="contacts__icon contacts__icon--map" width="10" height="15" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 0C1.79097 0 0 1.38072 0 3.08374C0 4.78676 4 11 4 11C4 11 8 4.78687 8 3.08374C8 1.38061 6.20917 0 4 0ZM4 4.45247C3.01962 4.45247 2.22473 3.83955 2.22473 3.08385C2.22473 2.32793 3.01962 1.71523 4 1.71523C4.98052 1.71523 5.77527 2.32793 5.77527 3.08385C5.77542 3.83955 4.98052 4.45247 4 4.45247Z" fill="white"/>
            </svg>
            <address className="contacts__adress">{props.address}</address>
          </a>
        </li>
        <li className="contacts__item">
          <a className="contacts__link contakts__link--tel" href="tel:+1234567890"> 
            <tel className="contacts__number">+7 978 *** ** ** </tel>
            <svg className="contacts__icon contacts__icon--tel" width="10" height="15" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.469889 0C0.213718 0 0 0.233132 0 0.51259V11.4874C0 11.7669 0.213718 12 0.469889 12H6.82757C7.08373 12 7.29745 11.7669 7.29745 11.4874V0.51259C7.29745 0.233132 7.08373 0 6.82757 0H0.469889ZM0.610483 0.691164H6.68709V9.90527H0.610492L0.610483 0.691164ZM3.64872 10.469C3.76323 10.469 3.88298 10.5231 3.96395 10.6114C4.04491 10.6997 4.09437 10.8302 4.09437 10.9551C4.09437 11.08 4.04491 11.2105 3.96395 11.2989C3.88298 11.3872 3.76323 11.4413 3.64872 11.4413C3.53422 11.4413 3.41461 11.3872 3.33364 11.2989C3.25267 11.2105 3.20308 11.08 3.20308 10.9551C3.20308 10.8302 3.25267 10.6997 3.33364 10.6114C3.41461 10.5231 3.53422 10.469 3.64872 10.469Z" fill="white"/>
            </svg>
            <p className="contacts__description">подберем, бесплатно забронируем</p>
          </a>
        </li>
      </ul>
      <ul className="contacts__list contacts__list--mobile">
        <li className="contacts__item">
        <li className="contacts__item">
            <a className="contacts__link contakts__link--tel" href="tel:+1234567890">
              <tel className="contacts__number">+7 978 *** ** **</tel>
            </a>
          </li>
          <a href="https://yandex.ru/maps/977/republic-of-crimea/house/shosseynaya_ulitsa_38a/Z00YcwNjQEcDQFpufXt1eH1iZw==/?ll=34.544059%2C44.749020&z=19" className="contacts__map">
            <addres className="contacts__adress">п. Малореченское, ул. Траляля, 46</addres>
          </a>
        </li>
      </ul>
    </section>
  )
}
