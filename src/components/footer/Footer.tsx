import { Globe, Users, BriefcaseBusiness } from 'lucide-react';
import './Footer.scss';

const footerGroups = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: [
      'Termos e Condições',
      'Política de Privacidade',
      'Troca e Devolução',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__about">
          <img
            src="/images/Logo.png"
            alt="Econverse"
            className="footer__logo"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="footer__social">
            <span aria-label="Rede social">
                <Globe size={20} />
            </span>

            <span aria-label="Comunidade">
                <Users size={20} />
            </span>

            <span aria-label="Rede profissional">
                <BriefcaseBusiness size={20} />
            </span>
            </div>
        </div>

        <div className="footer__links">
          {footerGroups.map((group) => (
            <div className="footer__group" key={group.title}>
              <h3>{group.title}</h3>

              {group.links.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
