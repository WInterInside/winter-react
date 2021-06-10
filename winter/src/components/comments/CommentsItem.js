import React from 'react'
import "./Comments.scss";

export default function CommentsItem(props) {
  return (
    <li className="comments__item">
      <div className="comments__content">
        <q className="comments__summary">{props.summ}</q>
        <q className="comments__description"> 
          Квартира оказалась просторной и чистой со всем необходимым поблизости. 
          Рядом находится Mall South Valley, где можно отлично провести время. 
          Кровати удобные, туалеты чистые. В общем, так держать! В следующий раз будем бронировать только здесь.
        </q>
        <cite className="comments__author">Дима Т. ( Норильск )</cite>
      </div>
    </li>
  )
}
