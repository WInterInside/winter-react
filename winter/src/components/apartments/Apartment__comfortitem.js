import React from 'react'
import "./Apartments.scss";
import ComfortIcon from '../comforticon/ComfortIcon';

export default function Apartments__comfortitem(props) {
  return (  
    <li className="apartment__comfortitem">      
      <ComfortIcon iconName={props.iconName}/>
      <p className="apartment__comfortdesc">{props.comfort}</p>
    </li>
  )
}
