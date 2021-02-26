import React from 'react'
import "./Comments.scss";

export default function Comments() {
  return (
    <section className="comments">
      <h2 className="section__heading">АПАРТАМЕНТЫ НРАВЯТСЯ ГОСТЯМ</h2>
      <ul className="comments__list">
        <li className="comments item">
          <q className="comments__summary">Просторно и чисто</q>
          <q className="comments__discription">
            Квартира оказалась просторной и чистой со всем необходимым поблизости. 
            Рядом находится Mall South Valley, где можно отлично провести время. 
            Кровати удобные, туалеты чистые. В общем, так держать! В следующий раз будем бронировать только здесь.
          </q>
          <cite className="comments__discription">Дима Т. ( Норильск )</cite>
        </li>
      </ul>
    </section>
  )
}
