import React from 'react'
import "./ComfortIcon.scss";

export default function ComfortIcon(props) {
  let className = 'icon ';
    if (props.iconName) {
      className += "icon--"+props.iconName;
    }
  return <div className={className}></div>
}

