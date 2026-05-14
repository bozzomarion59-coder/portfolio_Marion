import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const [index, setIndex] = useState(0)

  if (!project) {
    return (
      <main className="detail">
        <div className="detail__missing">
          <h1>Projet introuvable</h1>
          <p>Le projet « {slug} » n'existe pas (ou plus).</p>
          <Link to="/" className="btn btn--primary">
            ← Retour au portfolio
          </Link>
        </div>
      </main>
    )
  }

  const screenshots = project.screenshots || []
  const visible = screenshots.filter((s) => !s.src.endsWith('.pdf'))
  const pdfs = screenshots.filter((s) => s.src.endsWith('.pdf'))

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <main className="detail">
      <div className="detail__back">
        <Link to="/#projects" className="btn btn--ghost btn--small">
          <i className="fa-solid fa-arrow-left"></i> Retour aux projets
        </Link>
      </div>

      <header className="detail__hero">
        <span className="detail__period">{project.period}</span>
        <h1>{project.title}</h1>
        <p className="detail__tagline">{project.tagline}</p>

        <div className="detail__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              <i className="fa-brands fa-github"></i> Voir le code source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <i className="fa-solid fa-up-right-from-square"></i> Voir la démo
            </a>
          )}
        </div>
      </header>

      <section className="detail__grid">
        <article className="detail__main">
          <h2>Présentation</h2>
          <p>{project.description}</p>

          <h2>Objectifs du projet</h2>
          <ul className="detail__list">
            {project.objectives.map((o, i) => (
              <li key={i}>
                <i className="fa-solid fa-bullseye"></i> {o}
              </li>
            ))}
          </ul>

          <h2>Fonctionnalités clés</h2>
          <ul className="detail__list">
            {project.highlights.map((h, i) => (
              <li key={i}>
                <i className="fa-solid fa-check"></i> {h}
              </li>
            ))}
          </ul>

          <h2>Défis techniques</h2>
          <ul className="detail__list">
            {project.challenges.map((c, i) => (
              <li key={i}>
                <i className="fa-solid fa-mountain"></i> {c}
              </li>
            ))}
          </ul>

          <h2>Ce que j'en retiens</h2>
          <ul className="detail__list">
            {project.learnings.map((l, i) => (
              <li key={i}>
                <i className="fa-solid fa-lightbulb"></i> {l}
              </li>
            ))}
          </ul>
        </article>

        <aside className="detail__aside">
          <div className="detail__card">
            <h3>Stack technique</h3>
            <ul className="detail__stack">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="detail__card">
            <h3>Mon rôle</h3>
            <p>{project.role}</p>
          </div>

          <div className="detail__card">
            <h3>Période</h3>
            <p>{project.period}</p>
          </div>

          {project.github && (
            <div className="detail__card">
              <h3>Code source</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="detail__github"
              >
                <i className="fa-brands fa-github"></i> Voir sur GitHub
              </a>
            </div>
          )}
        </aside>
      </section>

      {visible.length > 0 && (
        <section className="detail__gallery">
          <h2>Aperçu</h2>
          <div className="gallery">
            <button
              className="gallery__nav gallery__nav--prev"
              onClick={() => setIndex((i) => (i - 1 + visible.length) % visible.length)}
              aria-label="Précédent"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="gallery__viewport">
              <img
                src={`/portfolio_Marion${visible[index].src}`}
                alt={visible[index].label}
              />
              <p className="gallery__caption">{visible[index].label}</p>
            </div>

            <button
              className="gallery__nav gallery__nav--next"
              onClick={() => setIndex((i) => (i + 1) % visible.length)}
              aria-label="Suivant"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div className="gallery__thumbs">
            {visible.map((s, i) => (
              <button
                key={i}
                className={`gallery__thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={s.label}
              >
                <img src={`/portfolio_Marion${s.src}`} alt="" />
              </button>
            ))}
          </div>
        </section>
      )}

      {pdfs.length > 0 && (
        <section className="detail__docs">
          <h2>Documents complémentaires</h2>
          <ul>
            {pdfs.map((p, i) => (
              <li key={i}>
                <a href={`/portfolio_Marion${p.src}`} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-file-pdf"></i> {p.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="detail__others">
        <h2>Autres projets</h2>
        <div className="detail__others-grid">
          {otherProjects.map((p) => (
            <Link key={p.slug} to={`/projets/${p.slug}`} className="detail__other-card">
              <strong>{p.title}</strong>
              <p>{p.tagline}</p>
              <span>Voir →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
