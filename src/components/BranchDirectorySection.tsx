import React from 'react';
import { SucursalesData } from '@/types/SucursalTypes';
import BranchDirectoryCard from './BranchDirectoryCard';
import styles from './BranchDirectorySection.module.scss';

interface BranchDirectorySectionProps {
  sucursalesData: SucursalesData;
}

const BranchDirectorySection: React.FC<BranchDirectorySectionProps> = ({ sucursalesData }) => {
  return (
    <section className={styles.branchDirectorySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestras Sucursales</h2>
        <p className={styles.subtitle}>Encuentra tu Buffalucas más cercano y haz tu pedido.</p>
        <div className={styles.grid}>
          {Object.values(sucursalesData.sucursales).map((sucursal) => (
            <BranchDirectoryCard key={sucursal.slug} sucursal={sucursal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchDirectorySection;
