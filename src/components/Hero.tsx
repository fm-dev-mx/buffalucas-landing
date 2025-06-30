import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  const whatsappNumber = '+521234567890'; // Mismo número que en la Navbar
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20hacer%20un%20pedido.`;
  const phoneNumber = 'tel:6141234567'; // Número de teléfono de la sucursal

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Las Alitas y Burgers que Amas, a un WhatsApp de Distancia
        </h1>
        <p className={styles.subtitle}>
          Pide ahora y recoge en tu sucursal más cercana. ¡Fácil y rápido!
        </p>
        <div className={styles.ctaContainer}>
          <Link 
            href={whatsappLink} 
            className={styles.ctaPrimary} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Pedir por WhatsApp
          </Link>
          <Link href={phoneNumber} className={styles.ctaSecondary}>
            Llamar a Sucursal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
