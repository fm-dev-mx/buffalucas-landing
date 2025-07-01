import styles from './HowToOrder.module.scss';
import { SucursalDetail } from '@/types/SucursalTypes';

interface HowToOrderProps {
  sucursal: SucursalDetail;
  tieneRepartoPropio: boolean;
}

const HowToOrder: React.FC<HowToOrderProps> = ({ sucursal, tieneRepartoPropio }) => {
  return (
    <section className={styles.howToOrderSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pedir es Así de Fácil</h2>
        <p className={styles.subtitle}>Tu antojo en 3 simples pasos.</p>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <div className={styles.iconWrapper}>🍽️</div>
            <h3 className={styles.stepTitle}>1. Elige tu Favorito</h3>
            <p className={styles.stepDescription}>
              Explora nuestros combos y platillos estrella. ¡Lo más difícil es decidir!
            </p>
          </div>
          {tieneRepartoPropio ? (
            <>
              <div className={styles.step}>
                <div className={styles.iconWrapper}>📱</div>
                <h3 className={styles.stepTitle}>2. Pide por WhatsApp</h3>
                <p className={styles.stepDescription}>
                  Envíanos un mensaje con tu pedido. Rápido, sin complicaciones y sin apps.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.iconWrapper}>🛍️</div>
                <h3 className={styles.stepTitle}>3. Recoge y Disfruta</h3>
                <p className={styles.stepDescription}>
                  Te avisaremos cuando esté listo para que pases a recogerlo. ¡Buen provecho!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.step}>
                <div className={styles.iconWrapper}>📲</div>
                <h3 className={styles.stepTitle}>2. Pide por tu App Favorita</h3>
                <p className={styles.stepDescription}>
                  Abre Uber Eats, Rappi o Didi Food y búscanos para hacer tu pedido.
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.iconWrapper}>🛵</div>
                <h3 className={styles.stepTitle}>3. Recibe y Disfruta</h3>
                <p className={styles.stepDescription}>
                  Tu pedido llegará directamente a tu puerta. ¡Buen provecho!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
