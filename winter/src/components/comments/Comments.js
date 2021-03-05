import React from 'react'
import "./Comments.scss";
import CommentsItem from '../comments/CommentsItem';

export default function Comments() {
  return (
    <section className="comments">
      <h2 className="section__heading">АПАРТАМЕНТЫ НРАВЯТСЯ ГОСТЯМ</h2>
      <div className="comments__wrapper">
        <button className="comments__toggle comments__toggle--left">←</button>
        <ul className="comments__list">
          <CommentsItem />
        </ul>      
        <button className="comments__toggle comments__toggle--right">→</button>
      </div>
    </section>
  )
}
