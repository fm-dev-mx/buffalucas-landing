import React from 'react';
import { SucursalDetail, SucursalesData } from '@/types/SucursalTypes';
import SucursalCard from './SucursalCard';

interface SucursalesSectionProps {
  sucursalesData: SucursalesData;
}

const SucursalesSection: React.FC<SucursalesSectionProps> = ({ sucursalesData }) => {
  return (
    <section className="sucursales-section">
      <h2>Nuestras Sucursales</h2>
      <div className="sucursales-grid">
        {Object.entries(sucursalesData.sucursales).map(([name, sucursal]) => (
          <SucursalCard key={name} name={name} sucursal={sucursal} />
        ))}
      </div>
    </section>
  );
};

export default SucursalesSection;
