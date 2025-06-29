import { MenuData, MenuItem, MenuCategory } from '@/types/MenuTypes';
import Image from 'next/image';

interface MenuSectionProps {
  menuData: MenuData;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuData }) => {
  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="menu-item">
      {item.image && (
        <Image src={item.image} alt={item.nombre} width={150} height={150} />
      )}
      <h3>{item.nombre}</h3>
      {item.descripcion && <p>{item.descripcion}</p>}
      <div className="prices">
        {Object.entries(item.precios).map(([type, price]) => (
          <span key={type}>
            {type !== 'default' && `${type}: `}${price}
          </span>
        ))}
      </div>
    </div>
  );

  const renderCategory = (categoryName: string, items: MenuItem[]) => (
    <section key={categoryName}>
      <h2>{categoryName}</h2>
      <div className="category-items">
        {items.map(renderMenuItem)}
      </div>
    </section>
  );

  return (
    <div className="menu-sections">
      {Object.entries(menuData.menu).map(([categoryName, categoryContent]) => {
        if (Array.isArray(categoryContent)) {
          return renderCategory(categoryName, categoryContent as MenuItem[]);
        } else {
          return (
            <section key={categoryName}>
              <h2>{categoryName}</h2>
              {Object.entries(categoryContent as { [key: string]: MenuItem[] }).map(([subCategoryName, subCategoryItems]) => (
                <div key={subCategoryName}>
                  <h3>{subCategoryName}</h3>
                  <div className="subcategory-items">
                    {subCategoryItems.map(renderMenuItem)}
                  </div>
                </div>
              ))}
            </section>
          );
        }
      })}
    </div>
  );
};

export default MenuSection;
