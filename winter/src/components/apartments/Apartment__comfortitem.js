import React from 'react'
import "./Apartments.scss";

export default function Apartments__comfortitem(props) {
  return (  
    <li className="apartment__comfortitem">      
      <div className="apartment__icon">1</div>
      <p className="apartment__comfortdesc">{props.comfort}</p>
    </li>
  )
}
