import React from 'react'
import "./Apartments.scss";

export default function Apartments__comfortitem(props) {
  return (  
    <li className="apartment__comfortitem">
      {props.comfort}
    </li>
  )
}
