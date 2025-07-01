import { GetStaticProps } from 'next';
import { getMenuData, getPromotionsData, getSucursalesData } from '@/lib/getData';
import { MenuData } from '@/types/MenuTypes';
import { Promo } from '@/types/Promo';
import { SucursalesData, SucursalDetail } from '@/types/SucursalTypes';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BranchDirectorySection from '@/components/BranchDirectorySection';
import styles from './index.module.scss';

// Mover la definición de genericSucursal fuera del componente Home
const genericSucursal: SucursalDetail = {
  nombre: "Buffalucas",
  slug: "home",
  whatsapp: "5216141234567",
  telefono_fijo: ["6141234567"],
  domicilio: "Dirección Genérica de Buffalucas", 
  horario: [],
  servicio_domicilio: ["Repartidores propios"],
  plataformas: {},
  foto: "",
  publico_objetivo: "",
  mapa_url: ""
};

interface HomeProps {
  sucursales: SucursalesData;
}

export default function Home({ sucursales }: HomeProps) {
  return (
    <div>
      <Navbar sucursal={genericSucursal} tieneRepartoPropio={true} />
      
      <section className={styles.homeHero}>
        <div className={styles.homeHeroContent}>
          <h1 className={styles.homeHeroTitle}>Bienvenido a Buffalucas</h1>
          <p className={styles.homeHeroSubtitle}>Encuentra tu sucursal más cercana y haz tu pedido.</p>
        </div>
      </section>

      <BranchDirectorySection sucursalesData={sucursales} />

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const sucursales = await getSucursalesData();
  return {
    props: {
      sucursales,
    },
  };
};
