import React from 'react'
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__copyright">Все права защищены</p>
          <div className="footer__contacts">
            <p className="footer__text">По всем вопросам обращайтесь по телефону:</p>
            <a className="footer__link footer__link--tel" href="tel:+1234567890"> 
              <tel className="footer__number">+7 978 *** ** ** </tel>
            </ a>
          </div>
        </div>
      </div>
    </footer>
  )
}
