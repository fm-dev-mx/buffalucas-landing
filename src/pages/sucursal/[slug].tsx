import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

// Importar los tipos y los datos
import { SucursalDetail, SucursalesData } from '@/types/SucursalTypes';
import sucursalesData from '@/data/sucursales.json';
import { getMenuData, getPromotionsData } from '@/lib/getData';
import { MenuData } from '@/types/MenuTypes';
import { Promo } from '@/types/Promo';

// Importar todos los componentes de la landing
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import FeaturedMenu from '@/components/FeaturedMenu';
import HowToOrder from '@/components/HowToOrder';
import PromotionsSection from '@/components/PromotionsSection';
import Footer from '@/components/Footer';
// import SucursalesSection from '@/components/SucursalesSection'; // Ya no se usa aquí
import BranchInfo from '@/components/BranchInfo'; // Nuevo componente para la info de la sucursal

// Definir la estructura de las props que recibirá la página
interface SucursalPageProps {
  sucursal: SucursalDetail;
  tieneRepartoPropio: boolean;
  menuData: MenuData;
  promotions: Promo[];
}

// Definir la estructura de los parámetros de la URL
interface Params extends ParsedUrlQuery {
  slug: string;
}

const SucursalPage: NextPage<SucursalPageProps> = ({ sucursal, tieneRepartoPropio, menuData, promotions }) => {
  return (
    <div>
      <Navbar sucursal={sucursal} tieneRepartoPropio={tieneRepartoPropio} />
      <Hero sucursal={sucursal} tieneRepartoPropio={tieneRepartoPropio} />
      <TrustBadges />
      <FeaturedMenu menuData={menuData} />
      <HowToOrder sucursal={sucursal} tieneRepartoPropio={tieneRepartoPropio} />
      <PromotionsSection promotions={promotions} />
      <BranchInfo sucursal={sucursal} />
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = Object.keys(sucursalesData.sucursales).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Si se intenta acceder a una sucursal que no existe, dará un 404
  };
};

export const getStaticProps: GetStaticProps<SucursalPageProps, Params> = async (context) => {
  const { slug } = context.params!;
  const sucursal = (sucursalesData.sucursales as Record<string, unknown>)[slug] as SucursalDetail | undefined;

  if (
    !sucursal ||
    typeof sucursal !== 'object' ||
    !('nombre' in sucursal) ||
    !('slug' in sucursal) ||
    !('foto' in sucursal) ||
    !('mapa_url' in sucursal) ||
    !('horario' in sucursal) ||
    !('servicio_domicilio' in sucursal) ||
    !('plataformas' in sucursal) ||
    !('telefono_fijo' in sucursal) ||
    !('whatsapp' in sucursal) ||
    !('domicilio' in sucursal) ||
    !('publico_objetivo' in sucursal)
  ) {
    return { notFound: true };
  }

  const tieneRepartoPropio = sucursal.servicio_domicilio.includes('Repartidores propios');
  const menuData = await getMenuData();
  const promotions = await getPromotionsData();

  return {
    props: {
      sucursal,
      tieneRepartoPropio,
      menuData,
      promotions,
    },
  };
};

export default SucursalPage;
