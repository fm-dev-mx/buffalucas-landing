import { getMenuData, getPromotionsData, getSucursalesData } from '@/lib/getData';
import { MenuData } from '@/types/MenuTypes';
import { Promo } from '@/types/Promo';
import { SucursalesData } from '@/types/SucursalTypes';
import MenuSection from '@/components/MenuSection';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PromotionsSection from '@/components/PromotionsSection';
import SucursalesSection from '@/components/SucursalesSection';

interface HomeProps {
  menuData: MenuData;
  promotions: Promo[];
  sucursales: SucursalesData;
}

export default function Home({ menuData, promotions, sucursales }: HomeProps) {
  return (
    <div>
      <Hero />
      <h1 id="menu">Menú de Buffalucas</h1>
      <MenuSection menuData={menuData} />
      <PromotionsSection id="promociones" promotions={promotions} />
      <SucursalesSection id="sucursales" sucursalesData={sucursales} />
      <Footer id="contacto" />
    </div>
  );
}

export async function getStaticProps() {
  const menuData = await getMenuData();
  const promotions = await getPromotionsData();
  const sucursales = await getSucursalesData();
  return {
    props: {
      menuData,
      promotions,
      sucursales,
    },
  };
}
