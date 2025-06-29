import fs from 'fs/promises';
import path from 'path';
import { MenuData } from '../types/MenuTypes';
import { Promo } from '../types/Promo';
import { Sucursal } from '../types/Sucursal';

export async function getMenuData(): Promise<MenuData> {
  const filePath = path.join(process.cwd(), 'src/data/menu.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: MenuData = JSON.parse(jsonData);
  return data;
}

export async function getPromotionsData(): Promise<Promo[]> {
  const filePath = path.join(process.cwd(), 'src/data/promociones.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: Promo[] = JSON.parse(jsonData);
  return data;
}

export async function getSucursalesData(): Promise<SucursalesData> {
  const filePath = path.join(process.cwd(), 'src/data/sucursales.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: SucursalesData = JSON.parse(jsonData);
  return data;
}
