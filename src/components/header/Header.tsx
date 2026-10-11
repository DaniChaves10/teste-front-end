
import { CreditCard, Heart, Package, Search, ShieldCheck, ShoppingBag, ShoppingCart, UserRound } from 'lucide-react';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__benefits">
        <div className="container header__benefits-content">
          <span>
            <ShieldCheck size={16} />
            Compra <strong>100% segura</strong>
          </span>

          <span>
            <Package size={16} />
            <strong>Frete grátis</strong> acima de R$ 200
          </span>

          <span>
            <CreditCard size={16} />
            <strong>Parcele</strong> suas compras
          </span>
        </div>
      </div>

      <div className="container header__main">
        <a href="/" className="header__logo" aria-label="Econverse - início">
          <span className="header__logo-symbol">e</span>
          <span>converse</span>
        </a>

        <form
          className="header__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Pesquisar">
            <Search size={20} />
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Meus pedidos">
            <ShoppingBag size={21} />
          </button>

          <button type="button" aria-label="Favoritos">
            <Heart size={21} />
          </button>

          <button type="button" aria-label="Minha conta">
            <UserRound size={21} />
          </button>

          <button type="button" aria-label="Carrinho">
            <ShoppingCart size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}
