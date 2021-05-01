import React, {useEffect, useState} from "react";

import {tns} from 'tiny-slider/src/tiny-slider';
import "./Slider.scss";

//let initialized = false;
var mainSlider = null;
var overlaySlider = null;
export default function Slider({data}) {
  let [showPopup, setShowPopup] = useState(false);
  let [animate, setAnimate] = useState(false);

  function openOverlay(index){
    setTimeout(() => {
      console.log(index);
      overlaySlider.goTo(index);
    }, 300);
    setShowPopup(true);
    setAnimate(true);
  }

  function closePopup(){
    setShowPopup(false);
    setAnimate(false);
  }

  function preventClose(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  useEffect (() => {
    
    //debugger;
    setTimeout (() => {
      if(!document.querySelector('.slider'))
        return;

      mainSlider = tns({
        container: '.slider',
        items: 1,
        autoWidth: true,
        gutter: 5,
        controls: true,
        nav: false,
        autoplay: false,
        loop: false,
        mouseDrag: true,
        arrowKeys: true,
        controlsContainer: '.toggls',
        prevButton: '.prev',
        nextButton: '.next',
        responsive: {
          900: {
            items: 1,
            gutter: 15
          }
        }
      });
      //initialized = true;
    }, 200);

    setTimeout (() => {
      if(!document.getElementById('overlay-slider'))
        return;

      overlaySlider = tns({
        container: '#overlay-slider',
        items: 1,
        //autoWidth: true,
        //gutter: 10,
        controls: false,
        nav: false,
        autoplay: false,
        loop: false,
        mouseDrag: true,
        arrowKeys: true,
        // controlsContainer: '.slider__popup--absolute',
        // prevButton: '.slider__popup-left',
        // nextButton: '.slider__popup-right',
        // responsive: {
        //   900: {
        //     items: 4,
        //     gutter: 15
        //   }
        // }
      });
      //initialized = true;
    }, 200);
  });

  return (
    <div className="slider">
      <div className="toggls">        
        <div className="prev">prev</div>      
        <div className="next">next</div>
      </div>
      <div className="slide"></div>
      <div className="slide"></div>
      <div className="slide"></div>
    </div>
  )
}