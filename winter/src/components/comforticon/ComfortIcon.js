import React from 'react'
import "./ComfortIcon.scss";

export default function ComfortIcon(props) {
  let className = 'icon ';
    if (props.iconColor) {
      className += "icon--"+props.iconColor;
    }
  return <div className={className}></div>
}

