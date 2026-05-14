import { interests } from '../data/skills.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <strong>Marion Bozzo</strong>
          <p>Développeuse Full-Stack · Hauts-de-France</p>
        </div>

        <div className="footer__col">
          <span className="footer__label">Centres d'intérêt</span>
          <ul className="footer__interests">
            {interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <span className="footer__label">Me retrouver</span>
          <div className="footer__socials">
            <a
              href="mailto:bozzomarion59@gmail.com"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marion-bozzo-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/bozzomarion59-coder"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer__copy">© {year} Marion Bozzo · Tous droits réservés</p>
    </footer>
  )
}
