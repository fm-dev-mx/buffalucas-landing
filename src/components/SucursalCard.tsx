import React from 'react';
import Image from 'next/image';
import { SucursalDetail, HorarioEntry } from '@/types/SucursalTypes';

interface SucursalCardProps {
  name: string;
  sucursal: SucursalDetail;
}

const platformLogos: { [key: string]: string } = {
  'Uber': '/icons/uber_eats.svg',
  'Didi': '/icons/didi_food.svg',
  'Rappi': '/icons/rappi.svg',
  // Add more platforms as needed
};

const SucursalCard: React.FC<SucursalCardProps> = ({ name, sucursal }) => {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sucursal.domicilio)}`;

  const formatDays = (days: string[]): string => {
    const allDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const sortedDays = days.sort((a, b) => allDays.indexOf(a) - allDays.indexOf(b));

    if (sortedDays.length === allDays.length) {
      return "Todos los días";
    }

    const ranges: string[] = [];
    let currentRange: string[] = [];

    for (let i = 0; i < sortedDays.length; i++) {
      const currentDay = sortedDays[i];
      const currentDayIndex = allDays.indexOf(currentDay);

      if (currentRange.length === 0) {
        currentRange.push(currentDay);
      } else {
        const lastDayInCurrentRange = currentRange[currentRange.length - 1];
        const lastDayIndex = allDays.indexOf(lastDayInCurrentRange);

        if (currentDayIndex === lastDayIndex + 1) {
          currentRange.push(currentDay);
        } else {
          if (currentRange.length > 1) {
            ranges.push(`${currentRange[0].charAt(0).toUpperCase() + currentRange[0].slice(1)} a ${currentRange[currentRange.length - 1].charAt(0).toUpperCase() + currentRange[currentRange.length - 1].slice(1)}`);
          } else {
            ranges.push(currentRange[0].charAt(0).toUpperCase() + currentRange[0].slice(1));
          }
          currentRange = [currentDay];
        }
      }
    }

    if (currentRange.length > 1) {
      ranges.push(`${currentRange[0].charAt(0).toUpperCase() + currentRange[0].slice(1)} a ${currentRange[currentRange.length - 1].charAt(0).toUpperCase() + currentRange[currentRange.length - 1].slice(1)}`);
    } else if (currentRange.length === 1) {
      ranges.push(currentRange[0].charAt(0).toUpperCase() + currentRange[0].slice(1));
    }

    return ranges.join(', ');
  };

  return (
    <div className="sucursal-card">
      <h3>{name}</h3>
      <p>
        <strong>Dirección:</strong> <a href={mapLink} target="_blank" rel="noopener noreferrer">
          {sucursal.domicilio} (Ver en Mapa)
        </a>
      </p>
      <p><strong>Teléfonos:</strong> {sucursal.telefono_fijo.join(', ')}</p>
      <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${sucursal.whatsapp}`} target="_blank" rel="noopener noreferrer">{sucursal.whatsapp}</a></p>
      <p><strong>Servicio a Domicilio:</strong> {sucursal.servicio_domicilio.join(', ')}</p>
      
      <h4>Horarios:</h4>
      <ul>
        {sucursal.horario.map((entry: HorarioEntry, index: number) => (
          <li key={index}>
            <span role="img" aria-label="reloj">🕒</span>
            {' '}
            {entry.tipo === 'presencial' ? 'Atención en sucursal:' : ''}
            {formatDays(entry.dias)}: {entry.hora}
            {entry.tipo === 'solo_plataformas' && entry.metodos && entry.metodos.length > 0 && (
              <div className="platform-logos">
                {entry.metodos.map((metodo) => (
                  platformLogos[metodo] ? (
                    <Image
                      key={metodo}
                      src={platformLogos[metodo]}
                      alt={metodo}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <span key={metodo}>{metodo}</span>
                  )
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SucursalCard;
