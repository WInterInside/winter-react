import React from "react"
import Smallhero from '../components/smallhero/Smallhero';
import Apartments from '../components/apartments/Apartments';
import Filter from '../components/filter/Filter';
import Footer from '../components/footer/Footer';


export default function More(props) {

  return (
    <div className="viev">
      <Smallhero logo="Дом 38а"/>

      <main className="main">    
        <Filter />
        <Apartments more/> 
      </main>

      <Footer />
    </div>
  )
}
