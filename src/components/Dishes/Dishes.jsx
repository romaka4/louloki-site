import './Dishes.css'
import React from 'react'

import {dishes} from '../../data/restaurant'
import { useEffect } from 'react'

function Dishes() {
  const [isOpen, setIsOpen ] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [touchStart, setTouchStart] = React.useState(null);

  useEffect(()=> {
    if (isOpen) {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
    return () =>{
      document.body.style.overflow = ""; 
    }
  }, [isOpen]);
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }
  const closeModel = () => {
    setIsOpen(false);
  }
  const nextDish = () => {

    setCurrentIndex((prev) => 
    (prev + 1) % dishes.length
    );
  };
  const prevDish = () => {
    setCurrentIndex((prev) => 
    (prev - 1 + dishes.length) % dishes.length
    );
  };
  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  }
  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const touchEnd = event.changedTouches[0].clientX
    const difference = touchStart - touchEnd;
    if (difference > 50) {
      nextDish();
    }
    if (difference < -50) {
      prevDish();
    }
    setTouchStart(null);
  }

  return (
    <section className='dishes section'>
      <div className='container dishes__block'>
        <h2 className='section__title'>Фотографии</h2>
        <div className='dishes__list'>
          {dishes.map((dish, index) => (
              <div className='dishes__item' 
                  key={dish.id}
                  onClick={() => openModal(index)}  >
                <img className='dishes__image' src={dish.image} alt={dish.title} />
              </div>
            )
          )}
        </div>
        {isOpen !== false && (
          <div className='dishes-modal' 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            if ( e.target === e.currentTarget ) {
              closeModel();
            }}}
          >
            <button className='dishes-modal__close' onClick={()=> closeModel()}>X</button>
            <button className='dishes-modal__prev' onClick={prevDish} >←</button>
            <img src={dishes[currentIndex].image} alt={dishes[currentIndex].title} className='dishes-modal__img dishes-modal__img--active'
            />
            <button className='dishes-modal__next' onClick={nextDish} >→</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Dishes