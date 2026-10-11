
import './Brands.scss';

const brands = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: `Econverse ${index + 1}`,
}));

export default function Brands() {
  return (
    <section className="brands container" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>

      <div className="brands__list">
        {brands.map((brand) => (
          <div className="brands__item" key={brand.id}>
            <img
            src="/images/Logo.png"
            alt="Logo da Econverse"
            loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
