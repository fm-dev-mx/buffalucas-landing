export interface HorarioEntry {
  tipo?: "presencial" | "solo_plataformas";
  dias: string[];
  hora: string;
  metodos?: string[];
}

export interface SucursalDetail {
  nombre: string; // Añadido
  slug: string; // Añadido
  foto: string; // Añadido
  mapa_url: string; // Añadido
  horario: HorarioEntry[];
  servicio_domicilio: string[];
  telefono_fijo: string[];
  whatsapp: string;
  domicilio: string;
  publico_objetivo: string;
  plataformas: { [key: string]: string }; // Añadido
}

export interface SucursalesData {
  sucursales: { [key: string]: SucursalDetail };
}