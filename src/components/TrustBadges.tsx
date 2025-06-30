import Image from 'next/image';
import styles from './TrustBadges.module.scss';

const TrustBadges = () => {
  return (
    <section className={styles.trustSection}>
      <div className={styles.container}>
        <p className={styles.title}>Confianza y Calidad</p>
        <div className={styles.badgesContainer}>
          <div className={styles.badge}>
            <Image src="/icons/rappi.svg" alt="Rappi" width={50} height={50} />
          </div>
          <div className={styles.badge}>
            <Image src="/icons/uber_eats.svg" alt="Uber Eats" width={50} height={50} />
          </div>
          <div className={styles.badge}>
            <Image src="/icons/didi_food.svg" alt="Didi Food" width={50} height={50} />
          </div>
          <div className={styles.badge}>
            <span className={styles.icon}>⭐</span>
            <span>4.8 en Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
