import logo from '../../assets/logo.webp'
import  { restaurants } from '../../data/restaurant'

function HeaderDesktop() {
  return (
    <div className='container header-desktop'>
            <img src={logo} 
            alt="Логотип Lou-Loki" 
            className='header__logo' />
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
  )

}

export default HeaderDesktop;