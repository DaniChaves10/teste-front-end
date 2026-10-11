
import './Banner.scss';

export default function Banner() {
  return (
    <section className="banner" aria-label="Promoções Black Friday">
      <div className="container banner__content">
        <h1>
          Venha conhecer nossas
          <br />
          promoções
        </h1>

        <p>
          <strong>50% Off</strong> nos produtos
        </p>

        <a href="#produtos" className="banner__button">
          Ver produto
        </a>
      </div>
    </section>
  );
}
