import fs from 'fs/promises';
import path from 'path';

export async function getMenuData() {
  const filePath = path.join(process.cwd(), 'src/data/menu.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data;
}
