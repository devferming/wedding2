import './styles/Gallery.css'

const Gallery = () => {

  const photoGallery = [
    ['Titulo', '/gallery/galler_001.webp', 'El amor verdadero se construye cada día.'],
    ['Titulo', '/gallery/galler_002.webp', 'En la vida en pareja, la risa es el mejor lenguaje.'],
    ['Titulo', '/gallery/galler_003.webp', 'Amar es compartir sueños y desafíos.'],
    ['Titulo', '/gallery/galler_004.webp', 'La complicidad es el corazón de la relación.'],
    ['Titulo', '/gallery/galler_005.webp', 'El amor es la decisión diaria de elegir al otro.'],
    ['Titulo', '/gallery/galler_006.webp', 'Juntos, somos más fuertes y felices.'],
    ['Titulo', '/gallery/galler_007.webp', 'El respeto y la confianza son la base de un amor duradero.'],
    ['Titulo', '/gallery/galler_008.webp', 'En cada mirada, se renueva la promesa de estar siempre juntos.'],
  ]

  return (
    <section className='gallery' id='gallery'>

      {
        photoGallery.map((crrPhoto, crridx) => (
          <article className='gallery__article' key={`art-${crridx}`}>
            <img className='gallery__article__bg' src={crrPhoto[1]} alt="novios_img" />
            <p className='gallery__article__desc'>{crrPhoto[2]}</p>
          </article>
        ))
      }

    </section>
  )
}

export default Gallery