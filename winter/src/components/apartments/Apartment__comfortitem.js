import React from 'react'
import "./Apartments.scss";

export default function Apartments__comfortitem(props) {
  return (  
    <li className="apartments__comfortitem">
      {props.comfort}
    </li>
  )
}
