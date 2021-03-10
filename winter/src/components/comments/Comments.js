import React from 'react'
import "./Comments.scss";
import CommentsItem from '../comments/CommentsItem';

export default function Comments() {
  return (
    <section className="comments">
      <h2 className="section__heading">АПАРТАМЕНТЫ НРАВЯТСЯ ГОСТЯМ</h2>
      <div className="comments__wrapper">
        <button className="comments__toggle comments__toggle--left">
          <svg className="comments__icon" width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4386 0.25568C10.8897 -0.0852265 11.5999 -0.0852265 12.051 0.25568C12.4869 0.585068 12.4869 1.13328 12.051 1.4619L3.87493 7.64044H30.8549C31.4839 7.64044 32 8.0182 32 8.49347C32 8.96875 31.4839 9.35879 30.8549 9.35879H3.87493L12.051 15.5258C12.4869 15.8667 12.4869 16.4157 12.051 16.7443C11.5999 17.0852 10.8897 17.0852 10.4386 16.7443L0.326912 9.10311C-0.108971 8.77372 -0.108971 8.22551 0.326912 7.89689L10.4386 0.25568Z" fill="#2B486A"/>
          </svg>
        </button>
        <ul className="comments__list">
          <CommentsItem />
        </ul>      
        <button className="comments__toggle comments__toggle--right">
          <svg className="comments__icon" width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M21.5484 0.255668C21.1125 -0.0852227 20.3869 -0.0852227 19.9357 0.255668C19.4998 0.585042 19.4998 1.13323 19.9357 1.46184L28.1131 7.6401H1.12899C0.499968 7.64086 0 8.01861 0 8.49386C0 8.96911 0.499968 9.35914 1.12899 9.35914H28.1131L19.9357 15.5259C19.4998 15.8668 19.4998 16.4157 19.9357 16.7443C20.3869 17.0852 21.1135 17.0852 21.5484 16.7443L31.6616 9.10347C32.1128 8.77409 32.1128 8.22591 31.6616 7.8973L21.5484 0.255668Z" fill="#2B486A"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
