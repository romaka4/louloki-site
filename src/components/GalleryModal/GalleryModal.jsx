import './GalleryModal.css'


function GalleryModal(
    { 
    photos,  
    currentIndex, 
    prevPhoto, 
    nextPhoto,
    closeModel,
    handleTouchStart,
    handleTouchEnd
  }
) {
  return(
    
                      <div className='dishes-modal'
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          closeModel();
                        }
                      }}>
                        <button className='dishes-modal__close' onClick={()=> closeModel()}>X</button>
                        <button className='dishes-modal__prev' onClick={prevPhoto} >←</button>
                        <img className='dishes-modal__img' src={photos[currentIndex].image} alt={photos[currentIndex].title}/>
                        <button className='dishes-modal__next' onClick={nextPhoto} >→</button>
                      </div>
                    
)}

export default GalleryModal