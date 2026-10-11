
import type { Product } from '../../types/Product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({
  product,
  onSelect,
}: ProductCardProps) {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__image-button"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          src={product.photo}
          alt={product.productName}
          loading="lazy"
        />
      </button>

      <div className="product-card__content">
        <h3 className="product-card__title">
          {product.productName}
        </h3>

        {product.descriptionShort && (
          <p className="product-card__description">
            {product.descriptionShort}
          </p>
        )}

        <strong className="product-card__price">
          {formattedPrice}
        </strong>
      </div>

      <button
        type="button"
        className="product-card__buy"
        onClick={() => onSelect(product)}
        aria-label={`Ver opções de compra de ${product.productName}`}
      >
        COMPRAR
      </button>
    </article>
  );
}
