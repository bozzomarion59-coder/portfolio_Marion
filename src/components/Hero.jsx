export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__bg">
        <span className="hero__glow"></span>
        <span className="hero__grid"></span>
      </div>

      <div className="hero__inner">
        <div className="hero__photo-wrap">
          <img
            src="/portfolio_Marion/images/photo-marion.jpeg"
            alt="Portrait de Marion Bozzo"
            className="hero__photo"
          />
          <span className="hero__photo-ring"></span>
        </div>

        <span className="hero__badge">
          <span className="hero__badge-dot"></span>
          Disponible pour une alternance — Septembre 2026
        </span>

        <h1 className="hero__title">
          Marion <span className="hero__title-accent">Bozzo</span>
        </h1>
        <p className="hero__role">
          <span>Développeuse Full-Stack</span>
          <span className="hero__role-sep">·</span>
          <span>en formation</span>
        </p>

        <p className="hero__tagline">
          Après 5 ans dans le social, j'ai choisi de me reconvertir dans le développement
          web. Aujourd'hui formée à <strong>ForEach Academy</strong>, je conçois des applications
          web et mobiles complètes — du back-end à l'interface — et je cherche une{' '}
          <strong>alternance Concepteur Développeur d'Applications</strong> dès septembre 2026
          pour mettre mes compétences au service d'un projet ambitieux.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            <i className="fa-solid fa-folder-open"></i>
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn--ghost">
            <i className="fa-solid fa-paper-plane"></i>
            Me contacter
          </a>
          <a
            href="/portfolio_Marion/CV_Marion_Bozzo.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
            Télécharger mon CV
          </a>
        </div>

        <ul className="hero__stats">
          <li>
            <strong>6</strong>
            <span>projets réalisés</span>
          </li>
          <li>
            <strong>2</strong>
            <span>mois de stage chez JAY</span>
          </li>
          <li>
            <strong>2</strong>
            <span>formations diplômantes</span>
          </li>
        </ul>
      </div>
    </header>
  )
}
