import React from "react"
import Smallhero from '../components/smallhero/Smallhero';
import Footer from '../components/footer/Footer';
import Calendar from '../components/calendar/Calendar';
import Comments from '../components/comments/Comments';


export default function MorerentPage() {

  return (
    <div className="viev">
      <Smallhero logo="More RENT"/>

      <main className="main">    
        <Calendar />
        <Comments />    
      </main>
      <Footer />
    </div>
  )
}
