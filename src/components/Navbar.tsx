import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss'; // Usaremos módulos de SCSS

const Navbar = () => {
  // Número de WhatsApp de la sucursal principal o un número general
  const whatsappNumber = '+521234567890';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20hacer%20un%20pedido.`;

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Image src="/logo.svg" alt="Buffalucas Logo" width={120} height={40} />
        </div>
        <Link
          href={whatsappLink}
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir por WhatsApp
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
