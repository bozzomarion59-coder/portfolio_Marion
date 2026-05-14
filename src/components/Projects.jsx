import { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

const FILTERS = [
  { key: 'all', label: 'Tous' },
  { key: 'featured', label: 'Projets phares' },
  { key: 'fullstack', label: 'Full-stack' },
  { key: 'frontend', label: 'Frontend' },
]

function matchesFilter(project, filter) {
  if (filter === 'all') return true
  if (filter === 'featured') return project.featured
  if (filter === 'fullstack') {
    return project.stack.some((s) =>
      ['Node.js', 'Express', 'MySQL', 'Python', 'Odoo'].includes(s)
    )
  }
  if (filter === 'frontend') {
    return !project.stack.some((s) =>
      ['Node.js', 'Express', 'MySQL', 'Python', 'Odoo'].includes(s)
    )
  }
  return true
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = projects.filter((p) => matchesFilter(p, filter))

  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__kicker">Mes réalisations</span>
        <h2 className="section__title">Projets</h2>
        <p className="section__lead">
          Une sélection de projets menés en formation et en stage. Cliquez sur
          chaque projet pour découvrir le contexte, la stack et les défis relevés.
        </p>
      </div>

      <div className="projects__filters" role="tablist" aria-label="Filtrer les projets">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={filter === f.key}
            className={`projects__filter ${filter === f.key ? 'is-active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} featured={p.featured} />
        ))}
      </div>
    </section>
  )
}
