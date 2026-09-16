import './Shef.css'

import shefPhoto from '../../assets/shef-photo.png'
function Shef() {
  return (
    <section className='shef'>
      <div className='container shef__section'>
        <div className='shef__bottom'></div>
        <h1 className='shef__title'>Шеф Lou-Loki</h1>
        <figure className='shef__photo'>
          <img src={shefPhoto} alt="Седов Тимур" className=''/>
          <figcaption className=''>Седов Тимур</figcaption>
        </figure>
        
      </div>
    </section>
  )
}

export default Shef;