import React from "react"
import Smallhero from '../components/smallhero/Smallhero';
import Footer from '../components/footer/Footer';
import CommentsApartment from '../components/comments/CommentsApartment';
import Apartment__comfortitem from '../components/apartments/Apartment__comfortitem';


export default function AppartmentPage() {

  return (
    <div className="viev">
      <Smallhero logo="dom38a"/>

      <main className="main">         
        <div className="container">
          <h1 className="section__heading section__heading--apart">Дом двухэтажный</h1>
        </div>
        <div className="apartment__gallery">          
          <img src="/img/mainapp.jpg" alt="app viev" className="apartment__mainimg"/>
          {/* <div className="slider"> */}
            <img src="/img/appimg.jpg" alt="app viev" className="apartment__img"/>
            <img src="/img/appimg.jpg" alt="app viev" className="apartment__img"/>
            <img src="/img/appimg.jpg" alt="app viev" className="apartment__img"/>
            <img src="/img/appimg.jpg" alt="app viev" className="apartment__img"/>
          {/* </div> */}
        </div>
        <section className="apartment__description container">
          <div className="apartment__gridwrapper">
            <p className="apartment__text">
              Наши апартаменты расположены в самом сердце Одессы. 
              За углом соседнего дома открывается прекрасный вид на море и морской вокзал. 
              Рядом кафе, рестораны, кофейни на любой вкус и бюджет. До супермаркета, который работает круглосуточно, 4 минуты ходьбы. 
              Все исторические достопримечательности в пешей доступности.
            </p>
          </div>
          <section className="apartment__comfort">          
            <h2 className="section__heading section__heading--apart">Удобства</h2>         
            <div className="apartment__gridwrapper">
              <ul className="apartment__comfortlist">
                <Apartment__comfortitem comfort="WI-FI" iconColor="green"/>
                <Apartment__comfortitem comfort="2 двухспальные кровати" iconColor="red"/>
                <Apartment__comfortitem comfort="телевизор"/>
                <Apartment__comfortitem comfort="1 ванная комната"/>
                <Apartment__comfortitem comfort="фен"/>
                <Apartment__comfortitem comfort="полотенца"/>
                <Apartment__comfortitem comfort="уборка номеров"/>
                <Apartment__comfortitem comfort="сейф"/>
                <Apartment__comfortitem comfort="стиральная машина"/>        
              </ul>
            </div>
          </section>
        </section>
        <div className="apartment__gridwrapper">
          <CommentsApartment />    
        </div>
      </main>
      <Footer />
    </div>
  )
}
