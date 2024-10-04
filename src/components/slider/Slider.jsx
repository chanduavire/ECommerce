import React, { useState } from 'react'
import './slider.scss';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Slider() {
    const [currentSlide,setCurrentSlide]=useState(0)
    const data=[
        "/img/slider1.jpg",
        "/img/slider2.jpg",
        "/img/slider3.png",
    ]
    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0?2:(prev)=>prev-1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide===2?0:(prev)=>prev+1)
    }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <KeyboardDoubleArrowLeftIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <KeyboardDoubleArrowRightIcon/>
            </div>
        </div>
    </div>
  )
}
