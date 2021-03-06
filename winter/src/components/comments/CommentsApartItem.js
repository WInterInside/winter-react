import React from 'react'
import "./Comments.scss";

export default function CommentsApartItem() {
  return (
    <li className="comments__item">
      <div className="comments__wrapper comments__wrapper--author">
        <cite className="comments__author comments__author--apart">Дима Т. ( Норильск )</cite>
        <q className="comments__time">2 недели назад</q>
      </div>
      <q className="comments__description comments__description--apart"> 
        Квартира оказалась просторной и чистой со всем необходимым поблизости. 
        Рядом находится Mall South Valley, где можно отлично провести время. 
        Кровати удобные, туалеты чистые. В общем, так держать! В следующий раз будем бронировать только здесь.
      </q>      
    </li>
  )
}
