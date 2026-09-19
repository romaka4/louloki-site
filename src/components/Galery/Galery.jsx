import './Galery.css'
import React from 'react'
import { galeryPhoto } from '../../data/restaurant'
import { useEffect } from 'react';

function Galery() {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ currentIndex, setCurrentIndex ] = React.useState(null);

  useEffect(() =>{
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen])
  
  const openModal = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  }
  const closeModel = () =>{
    setIsOpen(false);
  }
  const prevPhoto = ()=> {
    setCurrentIndex((prev)=> 
      ( prev - 1 +  galeryPhoto.length ) % galeryPhoto.length
  )
  }
  const nextPhgoto = () =>{
    setCurrentIndex((prev) =>
    (prev + 1) % galeryPhoto.length
    )
  }
  return (
    <section className='section'>
      <div className='galery container'>
        <h2 className='section__title'>Фотографии интерьера</h2>
                <div className='galery__images'>
                  {galeryPhoto.map((photo, index) => (
                      <div className='galery__item' 
                          key={photo.id}
                          onClick={() => openModal(index)}
                            >
                        <img className='galery__image' src={photo.image} alt={photo.title} />
                      </div>
                    )
                  )}
                </div>
                { isOpen !== false && (
                  <div className='dishes-modal'
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      closeModel();
                    }
                  }}>
                    <button className='dishes-modal__close' onClick={()=> closeModel()}>X</button>
                    <button className='dishes-modal__prev' onClick={prevPhoto} >←</button>
                    <img className='dishes-modal__img' src={galeryPhoto[currentIndex].image} alt={galeryPhoto[currentIndex].title}/>
                    <button className='dishes-modal__next' onClick={nextPhgoto} >→</button>
                  </div>
                )

                }
      </div>

    </section>
  )
}

export default Galery