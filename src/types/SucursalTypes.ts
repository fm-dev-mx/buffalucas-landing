export interface HorarioEntry {
  tipo?: "presencial" | "solo_plataformas";
  dias: string[];
  hora: string;
  metodos?: string[];
}

export interface SucursalDetail {
  horario: HorarioEntry[];
  servicio_domicilio: string[];
  telefono_fijo: string[];
  whatsapp: string;
  domicilio: string;
  publico_objetivo: string;
}

export interface SucursalesData {
  sucursales: { [key: string]: SucursalDetail };
}