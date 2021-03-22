import React from "react"
import Smallhero from '../components/smallhero/Smallhero';
import Apartments from '../components/apartments/Apartments';
import Filter from '../components/filter/Filter';
import Footer from '../components/footer/Footer';


export default function ApartmentsPage() {

  return (
    <div className="viev">
      <Smallhero logo="dom38a"/>

      <main className="main">    
        <Filter />
        <Apartments />
      </main>

      <Footer />
    </div>
  )
}
