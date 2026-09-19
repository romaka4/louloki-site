
import './Hero.css';
// import heroImg from "../../assets/hero-img.webp";
import imageRest from '../../assets/hero-photo.webp'
function Hero() {
  return (
    
      <section
        className="section hero"
        style={{ backgroundImage: `url(${imageRest})` }}
      >
        <div className="hero__container container">
        <h1 className='hero__title'>Lou-Loki</h1>
        <p className='hero__text'>Проект современной азиатской кухни</p>
        <a href="https://eda.yandex.ru/?redirectFrom=not_found_place" className='hero__btn-delivery' target="_blank">
          <span className='hero__btn-text'>Заказать доставку онлайн</span>
        </a>
        
      </div>
      </section>
      
    
  )
}
export default Hero