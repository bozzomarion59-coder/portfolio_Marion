import { timeline } from '../data/timeline.js'

export default function Parcours() {
  return (
    <section id="parcours" className="section">
      <div className="section__head">
        <span className="section__kicker">Mon évolution</span>
        <h2 className="section__title">Parcours</h2>
        <p className="section__lead">
          Du social au développement : un parcours en deux temps, motivée par
          l'envie de créer et de résoudre des problèmes concrets.
        </p>
      </div>

      <ol className="timeline">
        {timeline.map((step, i) => (
          <li key={i} className={`timeline__item timeline__item--${step.type}`}>
            <div className="timeline__year">{step.year}</div>
            <div className="timeline__content">
              <span className={`timeline__tag timeline__tag--${step.type}`}>
                {step.type === 'pro' ? 'Expérience' : 'Formation'}
              </span>
              <h3>{step.title}</h3>
              <p className="timeline__subtitle">{step.subtitle}</p>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
