import './About.css'

import aboutImg from '../../assets/concept-img.png'


function About() {
  return(
    <section className='container about'>
        <div className='about__rest'>
          <img className='about__img' src={aboutImg} alt="" />
          <div className='about__concept'>
            <h1 className='about__concept-title'>концепция ресторана</h1>
            <p className='about__concept-text'>Титульный продукт TYO - конечно, TOM YUM, но тут его точно стоит попробовать. В меню представлен классический и версия GREEN.
            <br />
            Так же в TYO целый раздел азиатских супов: том кха, карри лакса рамен и даже окрошка подается в азиатском стиле с креветками и васаби.
            <br /><br />В меню TYO все хиты Азии, раздел WOK, большой выбор ролл, блюда с карри и нежные десерты. Например, Моти в TYO обновляется каждые две недели, соусы всегда на основе сезонных фруктов и ягод.</p>
            <a href="https://eda.yandex.ru/?redirectFrom=not_found_place" className='hero__btn-delivery concept__button' target="_blank">
              <span className='hero__btn-text'>Заказать доставку онлайн</span>
            </a>
        </div>
        </div>
    </section>
  )
}

export default About;