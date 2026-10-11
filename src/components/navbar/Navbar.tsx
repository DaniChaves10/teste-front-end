
import './Navbar.scss';

const menuItems = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTOS',
  'OFERTAS DO DIA',
  'ASSINATURA',
];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="container navbar__content">
        {menuItems.map((item) => (
          <a key={item} href="#produtos">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
