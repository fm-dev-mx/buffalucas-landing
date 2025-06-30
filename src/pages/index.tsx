import { getMenuData, getPromotionsData, getSucursalesData } from '@/lib/getData';
import { MenuData } from '@/types/MenuTypes';
import { Promo } from '@/types/Promo';
import { SucursalesData } from '@/types/SucursalTypes';
import FeaturedMenu from '@/components/FeaturedMenu';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import HowToOrder from '@/components/HowToOrder';
import PromotionsSection from '@/components/PromotionsSection';
import SucursalesSection from '@/components/SucursalesSection';
import TrustBadges from '@/components/TrustBadges';

interface HomeProps {
  menuData: MenuData;
  promotions: Promo[];
  sucursales: SucursalesData;
}

export default function Home({ menuData, promotions, sucursales }: HomeProps) {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <FeaturedMenu menuData={menuData} />
      <HowToOrder />
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
