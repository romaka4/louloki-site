import './Shef.css'

import shefPhoto from '../../assets/shef-photo.png'
function Shef() {
  return (
    <section className='section'>
      <div className='container shef'>
        <div className='shef__bottom'></div>
        <h2 className='section__title'>Шеф Lou-Loki</h2>
        <figure className='shef__photo'>
          <img src={shefPhoto} alt="Седов Тимур" className=''/>
          <figcaption className=''>Седов Тимур</figcaption>
        </figure>
        
      </div>
    </section>
  )
}

export default Shef;