export default function Alternance() {
  return (
    <section id="alternance" className="section section--accent">
      <div className="section__head">
        <span className="section__kicker">Recherche en cours</span>
        <h2 className="section__title">À la recherche d'une alternance</h2>
        <p className="section__lead">
          Je prépare actuellement le titre{' '}
          <strong>Concepteur Développeur d'Applications</strong> et recherche une
          alternance pour mettre mes compétences au service d'une équipe.
        </p>
      </div>

      <div className="alternance__cards">
        <article className="alternance__card">
          <span className="alternance__icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </span>
          <h3>Formation visée</h3>
          <p>Concepteur Développeur d'Applications</p>
          <p className="alternance__sub">Titre RNCP niveau 6 (Bac+3/4) — ForEach Academy</p>
        </article>

        <article className="alternance__card">
          <span className="alternance__icon">
            <i className="fa-solid fa-calendar-days"></i>
          </span>
          <h3>Démarrage</h3>
          <p>Septembre 2026</p>
          <p className="alternance__sub">Disponible immédiatement pour les entretiens</p>
        </article>

        <article className="alternance__card">
          <span className="alternance__icon">
            <i className="fa-solid fa-file-contract"></i>
          </span>
          <h3>Contrat</h3>
          <p>Apprentissage ou Pro</p>
          <p className="alternance__sub">Rythme : 3 sem. entreprise / 1 sem. école</p>
        </article>

        <article className="alternance__card">
          <span className="alternance__icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <h3>Localisation</h3>
          <p>Hauts-de-France</p>
          <p className="alternance__sub">Métropole Lilloise · Douaisis · Permis B</p>
        </article>
      </div>

      <div className="alternance__looking">
        <h3>Ce que je recherche</h3>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i> Une équipe technique bienveillante
            qui aime transmettre
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Des projets concrets pour monter en
            compétence sur le full-stack
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Un environnement où l'on prend
            soin de la qualité du code et du produit
          </li>
          <li>
            <i className="fa-solid fa-check"></i> L'opportunité de contribuer à un
            produit que je peux faire grandir avec l'équipe
          </li>
        </ul>

        <div className="alternance__ctas">
          <a href="#contact" className="btn btn--primary">
            <i className="fa-solid fa-handshake"></i> Me proposer une mission
          </a>
          <a
            href="https://www.linkedin.com/in/marion-bozzo-7b6573180"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <i className="fa-brands fa-linkedin"></i> Mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
