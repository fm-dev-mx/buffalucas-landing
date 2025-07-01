import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SucursalDetail } from '@/types/SucursalTypes';
import styles from './BranchDirectoryCard.module.scss';

interface BranchDirectoryCardProps {
  sucursal: SucursalDetail;
}

const BranchDirectoryCard: React.FC<BranchDirectoryCardProps> = ({ sucursal }) => {
  return (
    <Link href={`/sucursal/${sucursal.slug}`} className={styles.branchCard}>
      <div className={styles.imageWrapper}>
        <Image 
          src={sucursal.foto || '/img/sucursales/placeholder.webp'} 
          alt={`Fachada de ${sucursal.nombre}`} 
          fill 
          className={styles.branchImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.branchName}>{sucursal.nombre}</h3>
        <span className={styles.ctaButton}>Ver Menú y Pedir</span>
      </div>
    </Link>
  );
};

export default BranchDirectoryCard;
