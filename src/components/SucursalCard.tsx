import React from 'react';
import { Sucursal } from '@/types/Sucursal';

interface SucursalCardProps {
  sucursal: Sucursal;
}

const SucursalCard: React.FC<SucursalCardProps> = ({ sucursal }) => {
  return (
    <div className="sucursal-card">
      <h3>{sucursal.name}</h3>
      <p>{sucursal.address}</p>
      <p>Tel: {sucursal.phone}</p>
      <a href={sucursal.mapLink} target="_blank" rel="noopener noreferrer">
        Ver en Mapa
      </a>
    </div>
  );
};

export default SucursalCard;
