// This component only exists to initialize AOS.
import { useEffect } from 'preact/hooks';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function AOSInitialiser() {
  useEffect(
    () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false, // animation only once per element
      });
    }, []
  );
  return null;
};