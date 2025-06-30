import Image from 'next/image';
import Link from 'next/link';
import { MenuData, MenuItem } from '@/types/MenuTypes';
import styles from './FeaturedMenu.module.scss';

interface FeaturedMenuProps {
  menuData: MenuData;
}

const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ menuData }) => {
  // Aplanar todos los items del menú en una sola lista para facilitar la búsqueda
  const allItems: MenuItem[] = Object.values(menuData.menu).flatMap(category => {
    if (Array.isArray(category)) {
      return category;
    }
    // Si es un objeto de subcategorías
    return Object.values(category).flat();
  });

  const featuredItems = allItems.filter(item => item.destacado === true);

  const whatsappBaseUrl = 'https://wa.me/+521234567890?text=';

  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Favoritos</h2>
        <p className={styles.subtitle}>
          Los platillos que todos aman, listos para que los pidas ahora.
        </p>
        <div className={styles.grid}>
          {featuredItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {item.image && (
                  <Image 
                    src={item.image} 
                    alt={`Foto de ${item.nombre}`}
                    fill
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.itemName}>{item.nombre}</h3>
                <p className={styles.itemDescription}>{item.descripcion}</p>
                <p className={styles.itemPrice}>
                  ${item.precios.display}
                </p>
                <Link 
                  href={`${whatsappBaseUrl}Hola,%20me%20gustaría%20pedir%20un(a)%20${encodeURIComponent(item.nombre)}`}
                  className={styles.ctaButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lo Quiero
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
