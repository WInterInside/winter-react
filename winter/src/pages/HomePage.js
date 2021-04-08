import React from "react"
import Hero from '../components/hero/Hero';
import Apartments from '../components/apartments/Apartments';
import Advantages from '../components/advantages/Advantages';
import Comments from '../components/comments/Comments';
import Footer from '../components/footer/Footer';


export default function HomePage() {

  return (
    <div className="viev">
      <Hero logo="Дом 38а"/>
      <main className="main">    
        <Apartments />
        <Advantages />
        <Comments />    
      </main>
      <Footer />
    </div>
  )
}
