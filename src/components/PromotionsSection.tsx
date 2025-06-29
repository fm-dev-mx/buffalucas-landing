import React from 'react';
import Image from 'next/image';
import { Promo } from '@/types/Promo';

interface PromotionsSectionProps {
  promotions: Promo[];
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ promotions }) => {
  return (
    <section className="promotions-section">
      <h2>Promociones</h2>
      <div className="promotions-grid">
        {promotions.map((promo) => (
          <div key={promo.id} className="promotion-card">
            <Image src={promo.image} alt={promo.name} width={300} height={200} />
            <h3>{promo.name}</h3>
            <p>{promo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionsSection;
