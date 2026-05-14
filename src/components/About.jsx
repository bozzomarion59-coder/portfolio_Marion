import { softSkills } from '../data/skills.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__kicker">Qui suis-je</span>
        <h2 className="section__title">À propos</h2>
        <p className="section__lead">
          Une reconversion choisie, une vraie passion pour le développement, et la
          rigueur héritée de mon ancien métier.
        </p>
      </div>

      <div className="about__grid">
        <article className="about__story">
          <h3>Mon parcours en quelques mots</h3>
          <p>
            Après <strong>5 ans dans le domaine du social</strong>, j'ai décidé de me
            reconvertir vers un métier qui me passionne : la conception et le
            développement d'applications. J'ai intégré la formation{' '}
            <strong>Développeur Web & Web Mobile</strong> à ForEach Academy, que je
            poursuis désormais avec le titre{' '}
            <strong>Concepteur Développeur d'Applications</strong> (RNCP niveau 6).
          </p>
          <p>
            Mon expérience précédente m'a forgé une vraie capacité d'écoute, le sens
            du travail en équipe et une rigueur que je retrouve aujourd'hui dans
            l'analyse des besoins, la conception et la livraison de projets web.
          </p>
          <p>
            Je suis actuellement <strong>en recherche d'alternance</strong> pour
            consolider mes compétences sur des projets réels et apporter ma
            motivation à une équipe.
          </p>
        </article>

        <aside className="about__softskills">
          <h3>Ce que je peux apporter</h3>
          <ul>
            {softSkills.map((s) => (
              <li key={s.title}>
                <span className="about__softskill-icon">
                  <i className={s.icon}></i>
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
