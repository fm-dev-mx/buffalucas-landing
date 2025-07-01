import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { SucursalDetail } from '@/types/SucursalTypes';

interface HeroProps {
  sucursal: SucursalDetail;
  tieneRepartoPropio: boolean;
}

const platformLogos: { [key: string]: string } = {
  'uber_eats': '/icons/uber_eats.svg',
  'didi_food': '/icons/didi_food.svg',
  'rappi': '/icons/rappi.svg',
};

const Hero: React.FC<HeroProps> = ({ sucursal, tieneRepartoPropio }) => {
  const whatsappLink = `https://wa.me/${sucursal.whatsapp}?text=Hola,%20quiero%20hacer%20un%20pedido.`;
  const phoneNumber = sucursal.telefono_fijo && sucursal.telefono_fijo.length > 0 
    ? `tel:${sucursal.telefono_fijo[0].replace(/\s/g, '')}` 
    : '';

  return (
    <section className={styles.hero}>
      <video 
        className={styles.videoBackground}
        src="/videos/hero-video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Las Alitas y Burgers que Amas, a un {tieneRepartoPropio ? 'WhatsApp' : 'Clic'} de Distancia
        </h1>
        <p className={styles.subtitle}>
          Pide ahora y {tieneRepartoPropio ? 'recoge en tu sucursal más cercana. ¡Fácil y rápido!' : 'a través de tu plataforma favorita.'}
        </p>
        <div className={styles.ctaContainer}>
          {tieneRepartoPropio ? (
            <>
              <Link 
                href={whatsappLink} 
                className={styles.ctaPrimary} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Pedir por WhatsApp
              </Link>
              {phoneNumber && (
                <Link href={phoneNumber} className={styles.ctaSecondary}>
                  Llamar a Sucursal
                </Link>
              )}
            </>
          ) : (
            <div className={styles.platformButtons}>
              {Object.entries(sucursal.plataformas || {}).map(([platformKey, platformUrl]) => (
                <Link
                  key={platformKey}
                  href={platformUrl}
                  className={styles.ctaPlatform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={platformLogos[platformKey] || '/icons/placeholder.svg'} 
                    alt={platformKey.replace(/_/g, ' ').toUpperCase()} 
                    width={24} 
                    height={24} 
                  />
                  Pide por {platformKey.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
