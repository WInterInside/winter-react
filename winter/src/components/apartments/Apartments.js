import React from 'react'
import "./Apartments.scss";
import ApartmentsCard from '../apartments/ApartmentsCard';
import MorerentPage from '../../pages/MorerentPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Apartments() {
  return (
    <section className="apartments">
      <div className="container container--padding0">
        <h2 className="section__heading section__heading--apartments">ДОСТУПНЫ ДЛЯ БРОНИРОВАНИЯ:</h2>
        <div className="apartments__wrapper apartments__wrapper--column">
          <a href="#" className="apartments__link apartments__link--more">Больше варинатов:</a>
          <ul className="apartments__list">
            <ApartmentsCard apps="Домик на 3"/>
            <ApartmentsCard apps="Люкс"/>
            <ApartmentsCard apps="Эконом"/>
          </ul>
        </div>
      </div>
{/* 
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/MorerentPage">More RENT</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/MorerentPage">
            <MorerentPage />
          </Route>
        </Switch>
      </div>
      </Router> */}


    </section>
  )


}
