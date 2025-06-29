import fs from 'fs/promises';
import path from 'path';
import { MenuData } from '../types/MenuTypes';

export async function getMenuData(): Promise<MenuData> {
  const filePath = path.join(process.cwd(), 'src/data/menu.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: MenuData = JSON.parse(jsonData);
  return data;
}
