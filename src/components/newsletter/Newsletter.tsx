
import { useState, type FormEvent } from 'react';
import './Newsletter.scss';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !accepted) return;

    setSubmitted(true);
    setName('');
    setEmail('');
    setAccepted(false);
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__content">
        <div className="newsletter__intro">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades
            e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <input
              type="text"
              placeholder="Digite seu nome"
              aria-label="Seu nome"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              aria-label="Seu e-mail"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(event) => setAccepted(event.target.checked)}
              required
            />
            Aceito os termos e condições
          </label>

          {submitted && (
            <p className="newsletter__message" role="status">
              Formulário validado! Inscrição de demonstração.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
