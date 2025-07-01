import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { SucursalDetail } from '@/types/SucursalTypes';

interface NavbarProps {
  sucursal: SucursalDetail;
  tieneRepartoPropio: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sucursal, tieneRepartoPropio }) => {
  // Añadir una comprobación de guardia al inicio del componente
  if (!sucursal) {
    // Esto debería capturar el caso donde sucursal es undefined
    console.error("Navbar recibió una prop 'sucursal' indefinida.");
    return null; // O podrías retornar una Navbar mínima de fallback
  }

  const whatsappLink = sucursal.whatsapp ? `https://wa.me/${sucursal.whatsapp}?text=Hola,%20quiero%20hacer%20un%20pedido.` : '#';

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href={sucursal.slug === 'home' ? '/' : `/sucursal/${sucursal.slug}`}>
            <Image src="/logo.svg" alt="Buffalucas Logo" width={120} height={40} fetchPriority='high'/>
          </Link>
        </div>
        <Link
          href={whatsappLink}
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tieneRepartoPropio ? 'Pedir por WhatsApp' : 'Contactar Sucursal'}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
