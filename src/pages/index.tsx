import { getMenuData } from '@/lib/getData';
import { MenuData } from '@/types/MenuTypes';
import MenuSection from '@/components/MenuSection';

interface HomeProps {
  menuData: MenuData;
}

export default function Home({ menuData }: HomeProps) {
  return (
    <div>
      <h1>Menú de Buffalucas</h1>
      <MenuSection menuData={menuData} />
    </div>
  );
}

export async function getStaticProps() {
  const menuData = await getMenuData();
  return {
    props: {
      menuData,
    },
  };
}
