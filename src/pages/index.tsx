import { getMenuData } from '@/lib/getData';
import { MenuItem } from '@/types/MenuItem';

interface HomeProps {
  menuItems: MenuItem[];
}

export default function Home({ menuItems }: HomeProps) {
  return (
    <div>
      <h1>Menú de Buffalucas</h1>
      <h2>¡Hola Mundo!</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const menuItems = await getMenuData();
  return {
    props: {
      menuItems,
    },
  };
}
