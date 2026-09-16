import './Galery.css'
import React from 'react'
import { galeryPhoto } from '../../data/restaurant'


function Galery() {
  const [ currentIndex, setCurrentIndex ] = React.useState(null);

  // const back = (event)=> {
  //   if (event !== img) {
  //     setCurrentIndex(null);
  //   }
  // }
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
                    <img className='dishes-modal__img' src={galeryPhoto[currentIndex].image} alt={galeryPhoto[currentIndex].title}
                     />
                  </div>
                )

                }
      </div>

    </section>
  )
}

export default Galery