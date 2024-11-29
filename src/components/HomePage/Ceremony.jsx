import './styles/Ceremony.css'
import { Map, Marker } from "pigeon-maps"

const Ceremony = () => {
  const color = `#DD4336`

  return (
    <section className='ceremony' id='ceremony'>
      <article className='ceremony__article'>

        <div className='ceremony__article__map'>
          <Map
            height={300}
            width={300}
            defaultCenter={[10.434047846982054, -66.9664752309123]}
            defaultZoom={17}
          >
            <Marker
              width={40}
              anchor={[10.434047846982054, -66.9664752309123]}
              color={color}
            />
          </Map>
        </div>


        <div className='ceremony__article__address'>

          <span className='ceremony__article__address__tittle'>
            <i className='ceremony__article__address__tittle__i bx bxs-church'></i>
            <h2 className='ceremony__article__address__tittle__h2'>Ceremonia</h2>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-calendar'></i>
            <p className='ceremony__article__address__span__p'>27 de diciembre 2024</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-map'></i>
            <p className='ceremony__article__address__span__p'>UD6 Caricuao, a 50mts de Los Bomberos</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-building'></i>
            <p className='ceremony__article__address__span__p'>Club Caney Don Diego</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-time'></i>
            <p className='ceremony__article__address__span__p'>Ceremonia: 08:00 PM.</p>
          </span>

          <span className='ceremony__article__address__span'>
            <i className='ceremony__article__address__span__i bx bxs-wine'></i>
            <p className='ceremony__article__address__span__p'>Recepción 09:00 PM. - 05:00 AM.</p>
          </span>

        </div>

      </article>
      <img className='ceremony__article__img' src="/bg_ceremony.webp" alt="novios_abrazados_img" />
      <img className='ceremony__article__address__i' src="/ceremony_ico.webp" alt="icono de iglesia" />
    </section>
  )
}

export default Ceremony