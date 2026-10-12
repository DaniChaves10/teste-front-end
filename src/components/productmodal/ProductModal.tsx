
import { useEffect, useRef, useState } from 'react';
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
  const [addedQuantity, setAddedQuantity] = useState<number | null>(null);

  const modalRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  function handleBuy() {
    setAddedQuantity(quantity);
  }

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusableElements =
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
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
        ref={modalRef}
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          <X size={18} />
        </button>

        <div className="product-modal__image">
          <img
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <div className="product-modal__details">
          <h2 id="product-modal-title">
            {product.productName}
          </h2>

          <strong className="product-modal__price">
            {formattedPrice}
          </strong>

          <p>{product.descriptionShort}</p>

          <span className="product-modal__more">
            Veja mais detalhes do produto
          </span>

          {addedQuantity !== null && (
            <p className="product-modal__success" role="status">
              {addedQuantity} unidade(s) de {product.productName}
              {' '}adicionada(s) ao carrinho!
            </p>
          )}

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                onClick={() => {
                  setQuantity((value) => Math.max(1, value - 1));
                  setAddedQuantity(null);
                }}
                aria-label="Diminuir quantidade"
              >
                <Minus size={14} />
              </button>

              <span aria-live="polite">{quantity}</span>

              <button
                type="button"
                onClick={() => {
                  setQuantity((value) => value + 1);
                  setAddedQuantity(null);
                }}
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
              {addedQuantity !== null ? 'ADICIONADO!' : 'COMPRAR'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
