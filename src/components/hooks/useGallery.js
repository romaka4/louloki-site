import React from 'react'
import { useEffect } from 'react'

function useGallery(photos) {
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
    const nextPhoto = () => {
      setCurrentIndex((prev) => 
      (prev + 1) % photos.length
      );
    };
    const prevPhoto = () => {
      setCurrentIndex((prev) => 
      (prev - 1 + photos.length) % photos.length
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
        nextPhoto();
      }
      if (difference < -50) {
        prevPhoto();
      }
      setTouchStart(null);
    }
  return {
    currentIndex,
    isOpen,
    openModal,
    closeModel,
    nextPhoto,
    prevPhoto,
    touchStart,
    handleTouchStart,
    handleTouchEnd
  }
}

export default useGallery