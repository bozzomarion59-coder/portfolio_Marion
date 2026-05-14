import { Link } from 'react-router-dom'

export default function ProjectCard({ project, featured = false }) {
  const isPdf = project.cover?.endsWith('.pdf')

  return (
    <article className={`project ${featured ? 'project--featured' : ''}`}>
      <Link to={`/projets/${project.slug}`} className="project__media">
        {isPdf ? (
          <div className="project__placeholder">
            <i className="fa-solid fa-file-pdf"></i>
            <span>{project.title}</span>
          </div>
        ) : (
          <img
            src={`/portfolio_Marion${project.cover}`}
            alt={project.title}
            loading="lazy"
          />
        )}
        <span className="project__overlay">
          <i className="fa-solid fa-arrow-right"></i>
          Voir le détail
        </span>
      </Link>

      <div className="project__body">
        <div className="project__meta">
          <span className="project__period">{project.period}</span>
          {featured && <span className="project__badge">Projet phare</span>}
        </div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__tagline">{project.tagline}</p>

        <ul className="project__stack">
          {project.stack.slice(0, 5).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project__actions">
          <Link to={`/projets/${project.slug}`} className="btn btn--small btn--primary">
            <i className="fa-solid fa-eye"></i> Détails
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn--small btn--ghost"
            >
              <i className="fa-brands fa-github"></i> Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
