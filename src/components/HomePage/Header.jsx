import './styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <video className='header__bg' src="/videos/vid001.webm" autoPlay loop muted playsInline />
      <audio id="audio" loop autoPlay>
        <source src="/audios/aud001.mp3" type="audio/mp3" />
        Tu navegador no soporta audio HTML5.
      </audio>
      <div className='header__tittle'>
        <h1 className='header__tittle__h1'>Maye & Luiggi</h1>
        <p className='header__tittle__p'>¡Nos casamos!</p>
      </div>
    </header>
  )
}
export default Header 