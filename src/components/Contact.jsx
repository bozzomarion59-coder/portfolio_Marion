import { languages } from '../data/skills.js'
import ContactForm from './ContactForm.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__head">
        <span className="section__kicker">On échange ?</span>
        <h2 className="section__title">Contact</h2>
        <p className="section__lead">
          Vous avez une mission d'alternance, une question, ou simplement envie
          d'échanger ? N'hésitez pas — l'email, le téléphone ou LinkedIn fonctionnent très bien.
        </p>
      </div>

      <div className="contact__grid">
        <a href="mailto:bozzomarion59@gmail.com" className="contact__card">
          <span className="contact__icon">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <div>
            <strong>Email</strong>
            <p>bozzomarion59@gmail.com</p>
          </div>
        </a>

        <a href="tel:+33618267201" className="contact__card">
          <span className="contact__icon">
            <i className="fa-solid fa-phone"></i>
          </span>
          <div>
            <strong>Téléphone</strong>
            <p>06 18 26 72 01</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/marion-bozzo-dev"
          target="_blank"
          rel="noreferrer"
          className="contact__card"
        >
          <span className="contact__icon">
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <div>
            <strong>LinkedIn</strong>
            <p>marion-bozzo-dev</p>
          </div>
        </a>

        <a
          href="https://github.com/bozzomarion59-coder"
          target="_blank"
          rel="noreferrer"
          className="contact__card"
        >
          <span className="contact__icon">
            <i className="fa-brands fa-github"></i>
          </span>
          <div>
            <strong>GitHub</strong>
            <p>bozzomarion59-coder</p>
          </div>
        </a>

        <div className="contact__card contact__card--info">
          <span className="contact__icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <div>
            <strong>Mobilité</strong>
            <p>Métropole Lilloise · Douaisis · Hauts-de-France · Permis B</p>
          </div>
        </div>

        <div className="contact__card contact__card--info">
          <span className="contact__icon">
            <i className="fa-solid fa-language"></i>
          </span>
          <div>
            <strong>Langues</strong>
            <p>
              {languages.map((l, i) => (
                <span key={l.name}>
                  {l.name} <em>({l.level})</em>
                  {i < languages.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="contact__downloads">
        <a
          href="/portfolio_Marion/CV_Marion_Bozzo.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
        >
          <i className="fa-solid fa-file-arrow-down"></i> Télécharger mon CV
        </a>
        <a
          href="/portfolio_Marion/lettre-recommandation-marion-bozzo.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn--ghost"
        >
          <i className="fa-solid fa-file-lines"></i> Voir ma lettre de recommandation
        </a>
      </div>

      <div className="contact__form-wrap">
        <h3>Ou écrivez-moi directement</h3>
        <p className="contact__form-lead">
          Remplissez ce formulaire — votre message arrive directement dans ma boîte mail.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
