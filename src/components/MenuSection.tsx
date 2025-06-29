import { useState } from 'react';
import { MenuData, MenuItem, MenuCategory } from '@/types/MenuTypes';
import Image from 'next/image';

interface MenuSectionProps {
  menuData: MenuData;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuData }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

  const renderCategoryContent = (categoryName: string, categoryContent: MenuItem[] | { [key: string]: MenuItem[] }) => {
    if (Array.isArray(categoryContent)) {
      return (
        <section key={categoryName}>
          <h2>{categoryName}</h2>
          <div className="category-items">
            {categoryContent.map(renderMenuItem)}
          </div>
        </section>
      );
    } else {
      return (
        <section key={categoryName}>
          <h2>{categoryName}</h2>
          {Object.entries(categoryContent).map(([subCategoryName, subCategoryItems]) => (
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
  };

  return (
    <div className="menu-sections">
      {activeCategory ? (
        <>
          <button onClick={() => setActiveCategory(null)} className="back-button">
            &larr; Volver a Categorías
          </button>
          {renderCategoryContent(activeCategory, menuData.menu[activeCategory])}
        </>
      ) : (
        <div className="category-list">
          {Object.entries(menuData.menu).map(([categoryName, categoryContent]) => (
            <div
              key={categoryName}
              className="category-card"
              onClick={() => setActiveCategory(categoryName)}
            >
              <h3>{categoryName}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSection;