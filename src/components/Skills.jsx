import { skillCategories } from '../data/skills.js'

const LEVELS = ['Découverte', 'Bases', 'Confirmée', 'Maîtrise', 'Expertise']

/** Renvoie 'on' (rempli), 'half' (demi) ou '' (vide) selon le niveau et la position. */
function dotState(level, n) {
  if (n <= level) return 'is-on'
  if (n - 0.5 <= level) return 'is-half'
  return ''
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__kicker">Stack technique</span>
        <h2 className="section__title">Compétences techniques</h2>
        <p className="section__lead">
          Les technologies que je manipule régulièrement à travers mes projets de
          formation et de stage.
        </p>
      </div>

      <div className="skills__categories">
        {skillCategories.map((cat) => (
          <article key={cat.name} className="skills__category">
            <h3>{cat.name}</h3>
            <ul>
              {cat.skills.map((s) => (
                <li key={s.name} title={LEVELS[Math.ceil(s.level) - 1]}>
                  <i className={s.icon}></i>
                  <span className="skills__name">{s.name}</span>
                  <span
                    className="skills__bar"
                    role="img"
                    aria-label={`Niveau ${s.level} sur 5`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className={`skills__dot ${dotState(s.level, n)}`}
                      ></span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
