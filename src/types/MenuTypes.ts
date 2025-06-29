export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precios: { [key: string]: number };
  image?: string;
}

export interface MenuCategory {
  [key: string]: MenuItem[] | { [key: string]: MenuItem[] };
}

export interface MenuData {
  menu: MenuCategory;
}
