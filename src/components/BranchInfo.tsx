import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SucursalDetail, HorarioEntry } from '@/types/SucursalTypes';
import styles from './BranchInfo.module.scss';

interface BranchInfoProps {
  sucursal: SucursalDetail;
}

const platformLogos: { [key: string]: string } = {
  'Uber': '/icons/uber_eats.svg',
  'Didi': '/icons/didi_food.svg',
  'Rappi': '/icons/rappi.svg',
};

const formatDays = (days: string[]): string => {
  const allDays = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
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

const BranchInfo: React.FC<BranchInfoProps> = ({ sucursal }) => {
  return (
    <section className={styles.branchInfoSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sucursal {sucursal.nombre}</h2>
        
        {sucursal.foto && (
          <div className={styles.imageWrapper}>
            <Image 
              src={sucursal.foto} 
              alt={`Fachada de ${sucursal.nombre}`} 
              width={600} 
              height={450} 
              className={styles.branchImage}
            />
          </div>
        )}

        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📍</span>
            <p>
              <strong>Dirección:</strong> 
              <Link href={sucursal.mapa_url} target="_blank" rel="noopener noreferrer">
                {sucursal.domicilio}
              </Link>
            </p>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📞</span>
            <p>
              <strong>Teléfonos:</strong> {sucursal.telefono_fijo.join(', ')}
            </p>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>⏰</span>
            <div>
              <strong>Horarios:</strong>
              {sucursal.horario.map((entry: HorarioEntry, index: number) => (
                <p key={index}>
                  {entry.tipo === 'presencial' ? 'Atención en sucursal:' : ''}
                  {formatDays(entry.dias)}: {entry.hora}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>💬</span>
            <p>
              <strong>WhatsApp:</strong> 
              <Link href={`https://wa.me/${sucursal.whatsapp}`} target="_blank" rel="noopener noreferrer">
                {sucursal.whatsapp}
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Link 
            href={`https://wa.me/${sucursal.whatsapp}`} 
            className={`${styles.ctaButton} ${styles.whatsappButton}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            💬 Pedir por WhatsApp
          </Link>
          {sucursal.telefono_fijo && sucursal.telefono_fijo.length > 0 && (
            <Link 
              href={`tel:${sucursal.telefono_fijo[0].replace(/\s/g, '')}`}
              className={`${styles.ctaButton} ${styles.callButton}`}
            >
              📞 Llamar a Sucursal
            </Link>
          )}
          <Link 
            href={sucursal.mapa_url} 
            className={`${styles.ctaButton} ${styles.mapButton}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            🗺️ Ver en Google Maps
          </Link>
        </div>

        {sucursal.servicio_domicilio && sucursal.servicio_domicilio.length > 0 && (
          <div className={styles.platformLogos}>
            {sucursal.servicio_domicilio.map((metodo) => (
              platformLogos[metodo] ? (
                <Image
                  key={metodo}
                  src={platformLogos[metodo]}
                  alt={metodo}
                  width={80}
                  height={30}
                />
              ) : null
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default BranchInfo;
