import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Buffalucas. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
        <p>Contacto: info@buffalucas.com | Tel: (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
