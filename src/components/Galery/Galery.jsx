import './Galery.css'
import React from 'react'
import { galeryPhoto } from '../../data/restaurant'


function Galery() {
  const [ currentIndex, setCurrentIndex ] = React.useState(null);

  

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
    <section className='container'>
      <div className='galery'>
        <h2 className='dishes__title'>Фотографии интерьера</h2>
                <div className='galery__images'>
                  {galeryPhoto.map((photo, index) => (
                      <div className='galery__item' 
                          key={photo.id}
                          onClick={() => setCurrentIndex(index)}
                            >
                        <img className='galery__image' src={photo.image} alt={photo.title} />
                      </div>
                    )
                  )}
                </div>
                { currentIndex !== null && (
                  <div className='dishes-modal'
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setCurrentIndex(null);
                    }
                  }}>
                    <button className='dishes-modal__close' onClick={()=> setCurrentIndex(null)}>X</button>
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