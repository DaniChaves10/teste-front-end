
import { useEffect, useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import type { Product } from '../../types/Product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const [addedToCart, setAddedToCart] = useState(false);

  function handleBuy() {
    setAddedToCart(true);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div
      className="product-modal__overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          <X size={18} />
        </button>

        <div className="product-modal__image">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal__details">
          <h2 id="product-modal-title">{product.productName}</h2>

          <strong className="product-modal__price">
            {formattedPrice}
          </strong>

          <p>{product.descriptionShort}</p>

          <span className="product-modal__more">
            Veja mais detalhes do produto
          </span>

          {addedToCart && (
          <p className="product-modal__success" role="status">
            {quantity} unidade(s) de {product.productName} adicionada(s) ao carrinho!
          </p>
        )}

        <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Diminuir quantidade"
              >
                <Minus size={14} />
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="Aumentar quantidade"
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
              onClick={handleBuy}
            >
              {addedToCart ? 'ADICIONADO!' : 'COMPRAR'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
