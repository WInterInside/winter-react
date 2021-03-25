import React from 'react'
import "./Comments.scss";

export default function CommentsItem() {
  return (
    <li className="comments__item">
      <q className="comments__summary">Просторно и чисто</q>
      <q className="comments__description"> 
        Квартира оказалась просторной и чистой со всем необходимым поблизости. 
        Рядом находится Mall South Valley, где можно отлично провести время. 
        Кровати удобные, туалеты чистые. В общем, так держать! В следующий раз будем бронировать только здесь.
      </q>
      <cite className="comments__author">Дима Т. ( Норильск )</cite>
    </li>
  )
}
