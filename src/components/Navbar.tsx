import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <Image src="/logo.svg" alt="Buffalucas Logo" width={150} height={50} />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link href="#menu">Menú</Link></li>
        <li><Link href="#promociones">Promociones</Link></li>
        <li><Link href="#sucursales">Sucursales</Link></li>
        <li><Link href="#contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
