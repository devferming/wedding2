import './styles/Invitation.css'
import { guests } from '../../data';

const Invitation = ({ id }) => {

  const quotas = [
    ['invitarte a ser testigo', 'una persona tan querida cómo tú', 'te invitamos', 'Tu presencia'],
    ['invitarte a ti y a tu bella familia a ser testigos', 'personas tan queridas cómo ustedes', 'los invitamos', 'La presencia de ustedes'],
    ['invitarlos a ser testigos', 'personas tan queridas cómo ustedes', 'los invitamos', 'La presencia de ustedes']
  ];

  // Seleccionar el contenido apropiado basado en el número de cupos
  const quotaIndex = guests[id][3]
  const [invitationPart1, invitationPart2, invitationPart3, invitationPart4] = quotas[quotaIndex];

  return (
    <section className='invitation' id='invitation'>
      {
        id && guests[id] ? (
          <article className='invitation__article'>
            <p className='invitation__article__p'>
              {guests[id][1]} <br />
              <span className='invitation__article__p--guest'>
                {guests[id][0]} <small>{`(${guests[id][2]} ${guests[id][2] === 1 ? 'cupo' : 'cupos'})`}</small>,
              </span>
            </p>
            <p className='invitation__article__p'>
              En el destino que el amor ha trazado para nosotros, hemos encontrado en el otro un refugio de paz, alegría y complicidad. Hoy, con corazones llenos de gratitud, hemos decidido entrelazar nuestras vidas en un compromiso eterno.
            </p>
            <p className='invitation__article__p'>
              Es un verdadero honor para nosotros {invitationPart1} de este momento tan significativo, en el que celebraremos no solo nuestro amor, sino también la bendición de contar con {invitationPart2}.
            </p>
            <p className='invitation__article__p'>
              Con profunda emoción, {invitationPart3} a acompañarnos este 27 de diciembre de 2024 en el <strong>Club Caney Don Diego</strong>, donde juntos daremos inicio a esta nueva y hermosa etapa, rodeados de aquellos que han sido parte esencial de nuestro viaje.
            </p>
            <p className='invitation__article__p'>
              {invitationPart4} en este día tan especial será un regalo que atesoraremos por siempre, más si algo nos quieren obsequiar en divisa, lo sabremos apreciar.
            </p>
            <p className='invitation__article__p'>
              Con todo nuestro cariño,
            </p>
            <p className='invitation__article__signature'>Maye & Luiggi</p>
          </article>
        ) : (
          <p className='invitation__article__p'>Cargando...</p>
        )
      }
    </section>
  )
}

export default Invitation
