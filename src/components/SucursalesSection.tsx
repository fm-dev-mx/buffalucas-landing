import React from 'react';
import { Sucursal } from '@/types/Sucursal';
import SucursalCard from './SucursalCard';

interface SucursalesSectionProps {
  sucursales: Sucursal[];
}

const SucursalesSection: React.FC<SucursalesSectionProps> = ({ sucursales }) => {
  return (
    <section className="sucursales-section">
      <h2>Nuestras Sucursales</h2>
      <div className="sucursales-grid">
        {sucursales.map((sucursal) => (
          <SucursalCard key={sucursal.id} sucursal={sucursal} />
        ))}
      </div>
    </section>
  );
};

export default SucursalesSection;
