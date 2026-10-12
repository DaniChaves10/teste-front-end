
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '../../types/Product';
import { getProducts } from '../../services/ProductService';
import ProductCard from '../productcard/ProductCard';
import './ProductList.scss';

interface ProductListProps {
  onSelectProduct: (product: Product) => void;
  showTabs?: boolean;
  showViewAll?: boolean;
  sectionId?: string;
}

const tabs = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

export default function ProductList({
  onSelectProduct,
  showTabs = true,
  showViewAll = false,
  sectionId,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('CELULAR');

  const [visibleCount, setVisibleCount] = useState(() => {
  if (typeof window === 'undefined') return 4;

  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 900) return 2;

  return 4;
});

  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth <= 480) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    }

    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Não foi possível carregar os produtos.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCount);

  useEffect(() => {
  setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  function previous() {
    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  function next() {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  }

  return (
    <section className="product-list container" id={sectionId}>
      <div className="product-list__heading">
        <h2>Produtos relacionados</h2>

        {showViewAll && (
          <span className="product-list__view-all">
            Ver todos
          </span>
        )}
      </div>

      {showTabs && (
        <div
          className="product-list__tabs"
          aria-label="Categorias de produtos"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={activeTab === tab ? 'active' : ''}
              onClick={() => {
                setActiveTab(tab);
                setCurrentIndex(0);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {loading && <p>Carregando produtos...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>Nenhum produto disponível no momento.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="product-list__carousel">
          <button
            type="button"
            className="product-list__arrow"
            onClick={previous}
            disabled={currentIndex === 0}
            aria-label="Produtos anteriores"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="product-list__grid">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${currentIndex + index}`}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>

          <button
            type="button"
            className="product-list__arrow"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            aria-label="Próximos produtos"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}