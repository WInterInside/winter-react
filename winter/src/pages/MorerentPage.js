import React from "react"
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import Calendar from '../components/calendar/Calendar';
import Comments from '../components/comments/Comments';
import Filter from '../components/filter/Filter';


export default function MorerentPage() {

  return (
    <div className="viev">
      <Hero logo="More RENT"/>

      <main className="main">    
        <Calendar />
        <Comments />    
        <Filter />    
      </main>
      <Footer />
    </div>
  )
}
