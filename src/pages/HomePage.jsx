import { useEffect, useState } from 'react'
import Header from '../components/HomePage/Header'
import Invitation from '../components/HomePage/Invitation'
import Ceremony from '../components/HomePage/Ceremony'
import { useParams } from 'react-router-dom'
import MainMenu from '../components/shared/MainMenu'
import ButtonUp from '../components/shared/ButtonUp'
import Gallery from '../components/HomePage/Gallery'

const HomePage = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > headerHeight - 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { id } = useParams();

  return (
    <>
      <MainMenu scrolled={scrolled} />
      <Header />
      <Invitation id={id} />
      <Ceremony />
      <Gallery />
      <ButtonUp scrolled={scrolled} />
    </>
  )
}

export default HomePage