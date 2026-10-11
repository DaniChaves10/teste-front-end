
import './PartnerBanners.scss';

const banners = [
  { id: 1, title: 'Parceiros' },
  { id: 2, title: 'Parceiros' },
];

export default function PartnerBanners() {
  return (
    <section className="partner-banners container" aria-label="Nossos parceiros">
      {banners.map((banner) => (
        <article className="partner-banners__item" key={banner.id}>
          <div className="partner-banners__content">
            <h2>{banner.title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#produtos" className="partner-banners__button">
              CONFIRA
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
