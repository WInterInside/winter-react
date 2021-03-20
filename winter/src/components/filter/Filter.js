import React from 'react'
import "./Filter.scss";

export default function Filter() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: ""
  //   };
  //   this.handleChange = this.handleChange.bind{this};
  // }

  return (
    <div className="filter">
      <div className="container">
        <h2 className="filter__name">Фильтр</h2>
        <div className="filter__wrapper">
          <div className="filter__wrapper filter__wrapper--price">
            <h3 className="filter__name">Цена</h3>
            <p className="filter__value">&#x20bd;</p>
            <input className="filter__input" type="" name="from" value="от" />
            <input className="filter__input" type="" name="to" value="до" />
          </div>
          <div className="filter__wrapper filter__wrapper--place">
            <h3 className="filter__name">Cпальные места</h3>
            <input className="filter__input" type="" name="from" value="от" />
            <input className="filter__input" type="" name="to" value="до" />
          </div>
        </div>
      </div>
    </div>
  )
}


