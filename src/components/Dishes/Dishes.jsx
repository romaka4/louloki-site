import './Dishes.css'
import useGallery from '../hooks/useGallery'
import {dishes} from '../../data/restaurant'
import GalleryModal from '../GalleryModal/GalleryModal'


function Dishes() {
  const {
    currentIndex,
    isOpen,
    openModal,
    closeModel,
    nextPhoto,
    prevPhoto,
    handleTouchStart,
    handleTouchEnd,
  } = useGallery(dishes);

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
            ))}  </div>
                { isOpen !== false && (
                  < GalleryModal 
                  photos={dishes}
                  currentIndex={currentIndex}
                  closeModel={closeModel}
                  prevPhoto={prevPhoto}
                  nextPhoto={nextPhoto}
                  handleTouchStart={handleTouchStart}
                  handleTouchEnd={handleTouchEnd}
                  />
                )}
      </div>
    </section>
  )
}

export default Dishes