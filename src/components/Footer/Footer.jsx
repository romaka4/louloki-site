import './Footer.css'
import logo from '../../assets/logo.webp'

function Footer() {
  return (
    <section className='footer'>
      <img src={logo} alt="Логотип" className='header__logo'  />
      <div className='footer__link'>
        <h3 className='footer__link-title'>Рестораны</h3>
        <ul className='footer__link-list'>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>La Fabbrica</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>Ош Пош</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>Ялла</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>Осака</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>Самовар</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>TYO</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>Amura</a></li>
          <li className='footer__link-list-item'><a href="" className='footer__link-item'>RedBoat</a></li>
        </ul>
      </div>
    </section>
  )
}
export default Footer;