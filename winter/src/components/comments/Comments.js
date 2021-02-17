import React from 'react'
import "./Comments.scss";

export default function Comments() {
  return (
    <section className="comments">
      <h2 className="section__heading">АПАРТАМЕНТЫ НРАВЯТСЯ ГОСТЯМ</h2>
      <ul className="comments__list">
        <li className="comment__item">1</li>
        <li className="comment__item">2</li>
        <li className="comment__item">3</li>
      </ul>
    </section>
  )
}
