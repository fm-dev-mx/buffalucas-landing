import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5215512345678'; // Replace with your WhatsApp number
  const message = 'Hola, me gustaría hacer un pedido.'; // Pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
