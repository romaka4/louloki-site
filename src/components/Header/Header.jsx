import './Header.css'
import logo from '../../assets/logo.webp'
import phoneIcon from '../../assets/phone-call.svg'
import  { restaurants } from '../../data/restaurant'
console.log(restaurants.length);
function Header() {
  return (
  <header className='header'>
      <div className="container header__container">
        <img src={logo} 
        alt="Логотип Lou-Loki" 
        className='header__logo' />
        <div className='header__contacts'>
        {restaurants.map((restaurant) => (
          <div className='header__contact' key={restaurant.id}>
            <img src={phoneIcon} alt="" className='header__contact-icon' />
          <div className="header__contact-info">
            <a
              className="header__contact-link"
              href={'tel:${restaurant.phone}'}
            >{restaurant.phone}
            </a>
            <a href={restaurant.mapUrl} className="header__contact-description">
              г. Ростов-на-Дону, {restaurant.adress}
            </a>
        </div>
          </div>
        ))}
        </div>
      </div>
  </header>
  
  )
}

export default Header