
import './Categories.scss';

const categories = [
  { name: 'Tecnologia', image: '/icons/tecnologia.svg' },
  { name: 'Supermercado', image: '/icons/supermercado.svg' },
  { name: 'Bebidas', image: '/icons/bebidas.svg' },
  { name: 'Ferramentas', image: '/icons/ferramentas.svg' },
  { name: 'Saúde', image: '/icons/saude.svg' },
  { name: 'Esportes e Fitness', image: '/icons/esportes.svg' },
  { name: 'Moda', image: '/icons/moda.svg' },
];

export default function Categories() {
  return (
    <section
      className="categories container"
      id="categorias"
      aria-label="Categorias de produtos"
    >
      <div className="categories__list">
        {categories.map(({ name, image }, index) => (
          <a
            href="#produtos"
            className={`categories__item ${
              index === 0 ? 'categories__item--active' : ''
            }`}
            key={name}
          >
            <div className="categories__icon">
              <img
                src={image}
                alt=""
                className="categories__image"
              />
            </div>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
