import React from "react"
import Hero from '../components/hero/Hero';
import Apartments from '../components/apartments/Apartments';
import Advantages from '../components/advantages/Advantages';
import Comments from '../components/comments/Comments';

export default function HomePage() {

  return (
    <main className="main">      
      <Hero />
      <Apartments />
      <Advantages />
      <Comments />
    </main>    
  )
}
