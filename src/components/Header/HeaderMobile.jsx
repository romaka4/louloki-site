import { useState } from "react";


import  { restaurants } from '../../data/restaurant'

function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className='header-mobile'>
      <div className="header-mobile__top">
        <button
            className={`header__menu-button ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`burger-btn__line ${isOpen ? "burger-btn--active" : ""}`}></span>
            <span className={`burger-btn__line ${isOpen ? "burger-btn--active" : ""}`}></span>
            <span className={`burger-btn__line ${isOpen ? "burger-btn--active" : ""}`}></span>
        </button>
      </div>
        
        <div className= {`header-mobile__contacts ${isOpen ? "active" : ""}` }>
                      <a href="_blank" className='header__logo-title'>LOU-LOKI</a>  
                      <div className='header__contacts'>
                      {restaurants.map((restaurant) => (
                        <div className='header__contact' key={restaurant.id}>
                          <img src={restaurant.icon} alt="" className='header__contact-icon' />
                        <div className="header__contact-info">
                        <a
                            className="header__contact-link"
                            href={'tel:${restaurant.phone}'}
                          >{restaurant.phone}
                          </a>
                          <a href={restaurant.mapUrl} className="header__contact-description">
                            г. Ростов-на-Дону, {restaurant.address}
                          </a>
                      </div>
                        </div>
            ))}
          </div>
        </div>
        
    </div>
  )
}

export default HeaderMobile;