
import {
  MonitorSmartphone,
  Store,
  Wine,
  Wrench,
  HeartHandshake,
  Dumbbell,
  Shirt,
} from 'lucide-react';

import './Categories.scss';

const categories = [
  { name: 'Tecnologia', Icon: MonitorSmartphone },
  { name: 'Supermercado', Icon: Store },
  { name: 'Bebidas', Icon: Wine },
  { name: 'Ferramentas', Icon: Wrench },
  { name: 'Saúde', Icon: HeartHandshake },
  { name: 'Esportes e Fitness', Icon: Dumbbell },
  { name: 'Moda', Icon: Shirt },
];

export default function Categories() {
  return (
    <section className="categories container" id="categorias" aria-label="Categorias de produtos">
      <div className="categories__list">
        {categories.map(({ name, Icon }, index) => (
          <a
            href="#produtos"
            className={`categories__item ${index === 0 ? 'categories__item--active' : ''}`}
            key={name}
          >
            <div className="categories__icon">
              <Icon size={34} strokeWidth={1.5} />
            </div>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
