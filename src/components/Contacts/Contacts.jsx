import './Contacts.css'
import { restaurants } from '../../data/restaurant'
function Contacts() {
  return(
    <section className='section'>
      <div className='contacts container'>
        <h2 className='section__title'>Контакты</h2>
        <div className='contacts__list'>
            { restaurants.map((restaurant) => (
              <div className='contact__item' key={restaurant.id}>
                <h3 className='contact__title'>
                  {restaurant.title}
                </h3>
              <a href={restaurant.mapUrl} className="contact__description">
                      г. Ростов-на-Дону, <br/> {restaurant.address}
                    </a>
                <a
                className="contact__link header__contact-link"
                href={'tel:${restaurant.phone}'}
              >{restaurant.phone}
            </a>
            </div>
            )) }
            <div className='contact__item' >
                <h3 className='contact__title'>
                  График работы
                </h3>
                <p className='contact__time'>Пн - Вс 11:00 - 23:00</p>
              
            </div>

        </div>
        <a href="https://eda.yandex.ru/?redirectFrom=not_found_place" className='hero__btn-delivery contact__btn' target="_blank">
          <span className='hero__btn-text'>Заказать доставку онлайн</span>
        </a>
      </div>

    </section>
  )
}

export default Contacts