import './Interior.css'
import useGallery from '../hooks/useGallery';
import { interiorPhoto } from '../../data/restaurant'

import GalleryModal from '../GalleryModal/GalleryModal';

function Interior() {
  const {
    currentIndex,
    isOpen,
    openModal,
    closeModel,
    prevPhoto,
    nextPhoto,
    handleTouchStart,
    handleTouchEnd,
  } = useGallery(interiorPhoto);
  return (
    <section className='section'>
      <div className='interior container'>
        <h2 className='section__title'>Фотографии интерьера</h2>
                <div className='interior__images'>
                  {interiorPhoto.map((photo, index) => (
                      <div className='interior__item' 
                          key={photo.id}
                          onClick={() => openModal(index)}
                            >
                        <img className='interior__image' src={photo.image} alt={photo.title} />
                      </div>
                    )
                  )}
                </div>
                { isOpen !== false && (
                  < GalleryModal 
                  photos={interiorPhoto}
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

export default Interior